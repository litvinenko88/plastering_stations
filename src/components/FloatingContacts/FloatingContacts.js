'use client'
import { useState, useEffect } from 'react'
import { globalTimer } from '../../utils/timer'
import Notification from '../Notification/Notification'
import './FloatingContacts.css'

export default function FloatingContacts() {
  const [showOperatorMessage, setShowOperatorMessage] = useState(false)
  const [showSpecialOffer, setShowSpecialOffer] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState([])
  const [actionSeconds, setActionSeconds] = useState(45)
  const [actionMinutes, setActionMinutes] = useState(32)
  const [actionHours, setActionHours] = useState(14)
  const [actionDays, setActionDays] = useState(5)
  const [userInteracted, setUserInteracted] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '' })
  const [offerShownManually, setOfferShownManually] = useState(false)

  useEffect(() => {
    // Подписка на глобальный таймер
    const handleTimerUpdate = (time) => {
      setActionDays(time.days)
      setActionHours(time.hours)
      setActionMinutes(time.minutes)
      setActionSeconds(time.seconds)
    }

    globalTimer.subscribe(handleTimerUpdate)

    // Массив для хранения всех таймеров
    const timers = []

    // Первое сообщение через 15 секунд
    const firstTimer = setTimeout(() => {
      const firstMessage = {
        id: 1,
        text: 'Здравствуйте! Помочь подобрать штукатурную станцию под ваши задачи?',
        timestamp: Date.now()
      }
      setMessages([firstMessage])
      setShowOperatorMessage(true)
      
      // Скрыть через 8 секунд
      const hideTimer = setTimeout(() => {
        setShowOperatorMessage(false)
        
        // Второе сообщение через 20 секунд (только если не показано вручную)
        const secondTimer = setTimeout(() => {
          if (!offerShownManually) {
            const secondMessage = {
              id: 2,
              text: 'У нас сейчас действует специальное предложение на покупку станции. Оставьте свои контакты и я расскажу вам более подробно',
              timestamp: Date.now()
            }
            setMessages(prev => [...prev, secondMessage])
            setShowSpecialOffer(true)
            
            // Скрыть через 10 секунд только если пользователь не взаимодействовал
            const autoHideTimer = setTimeout(() => {
              if (!userInteracted) {
                setShowSpecialOffer(false)
              }
            }, 10000)
            timers.push(autoHideTimer)
          }
        }, 20000)
        timers.push(secondTimer)
      }, 8000)
      timers.push(hideTimer)
    }, 15000)
    timers.push(firstTimer)

    return () => {
      // Очищаем все таймеры
      timers.forEach(timer => clearTimeout(timer))
      globalTimer.unsubscribe(handleTimerUpdate)
    }
  }, [offerShownManually, userInteracted])

  const closeOperatorMessage = () => {
    setShowOperatorMessage(false)
  }

  const closeSpecialOffer = () => {
    setShowSpecialOffer(false)
  }

  const openChat = () => {
    setShowChat(true)
    setShowOperatorMessage(false)
    setShowSpecialOffer(false)
  }

  const closeChat = () => {
    setShowChat(false)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      setNotification({
        show: true,
        message: 'Пожалуйста, заполните все поля',
        type: 'error'
      })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const { sendToTelegram } = await import('../../utils/telegram')
      const result = await sendToTelegram(formData, 'Специальное предложение (Плавающие контакты)')
      
      if (result.success) {
        setNotification({
          show: true,
          message: '🎉 Отлично! Ваша заявка принята. Наш менеджер свяжется с вами в течение 10 минут с выгодным предложением!',
          type: 'success'
        })
        setFormData({ name: '', phone: '' })
        setShowSpecialOffer(false)
        setShowChat(false)
      } else {
        setNotification({
          show: true,
          message: '❌ Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь с нами по телефону.',
          type: 'error'
        })
      }
    } catch (error) {
      setNotification({
        show: true,
        message: '❌ Ошибка соединения. Проверьте интернет и попробуйте снова.',
        type: 'error'
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    let newValue = value
    
    if (name === 'name') {
      newValue = value.slice(0, 20)
    }
    
    if (name === 'phone') {
      newValue = value.replace(/[^+\d]/g, '').slice(0, 13)
    }
    
    setFormData(prev => ({ ...prev, [name]: newValue }))
  }

  const handleFormInteraction = () => {
    setUserInteracted(true)
  }

  const showOfferManually = () => {
    setOfferShownManually(true)
    setShowOperatorMessage(false)
    
    // Добавляем сообщение только если его еще нет
    setMessages(prev => {
      const hasSecondMessage = prev.some(msg => msg.id === 2)
      if (!hasSecondMessage) {
        const secondMessage = {
          id: 2,
          text: 'У нас сейчас действует специальное предложение на покупку станции. Оставьте свои контакты и я расскажу вам более подробно',
          timestamp: Date.now()
        }
        return [...prev, secondMessage]
      }
      return prev
    })
    setShowSpecialOffer(true)
  }

  return (
    <>
      {showOperatorMessage && (
        <div className="operator-message">
          <button className="operator-close" onClick={closeOperatorMessage}>
            ×
          </button>
          <div className="operator-avatar">
            <img src="/images/operator.webp" alt="Оператор" />
          </div>
          <div className="operator-text">
            {messages[0]?.text}
          </div>
          <button className="help-button" onClick={showOfferManually}>
            Помощь
          </button>
        </div>
      )}

      <Notification 
        message={notification.message}
        type={notification.type}
        isVisible={notification.show}
        onClose={() => setNotification({ ...notification, show: false })}
      />

      {showSpecialOffer && (
        <div className="special-offer">
          <button className="operator-close" onClick={closeSpecialOffer}>
            ×
          </button>
          <div className="operator-avatar">
            <img src="/images/operator.webp" alt="Оператор" />
          </div>
          <div className="operator-text">
            {messages[1]?.text}
          </div>
          <div className="offer-form">
            <h4>Спец предложение действует {actionDays}д {actionHours.toString().padStart(2, '0')}:{actionMinutes.toString().padStart(2, '0')}:{actionSeconds.toString().padStart(2, '0')}</h4>
            <form onSubmit={handleFormSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Ваше имя" 
                value={formData.name}
                onChange={handleInputChange}
                onFocus={handleFormInteraction}
                maxLength="20"
                required 
                disabled={isSubmitting}
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="+7 (999) 123-45-67" 
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={handleFormInteraction}
                maxLength="13"
                required 
                disabled={isSubmitting}
              />
              <button type="submit" disabled={isSubmitting || !formData.name.trim() || !formData.phone.trim()}>
                {isSubmitting ? '⏳ Отправляем...' : '🎁 Получить предложение'}
              </button>
            </form>
          </div>
        </div>
      )}

      {showChat && (
        <div className="operator-chat">
          <div className="chat-header">
            <div className="operator-avatar">
              <img src="/images/operator.webp" alt="Оператор" />
            </div>
            <span>Оператор</span>
            <button className="chat-close" onClick={closeChat}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map(message => (
              <div key={message.id} className="chat-message">
                <div className="message-avatar">
                  <img src="/images/operator.webp" alt="Оператор" />
                </div>
                <div className="message-text">{message.text}</div>
              </div>
            ))}
            <div className="offer-form">
              <h4>Спец предложение действует {actionDays}д {actionHours.toString().padStart(2, '0')}:{actionMinutes.toString().padStart(2, '0')}:{actionSeconds.toString().padStart(2, '0')}</h4>
              <form onSubmit={handleFormSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={handleFormInteraction}
                  maxLength="20"
                  required 
                  disabled={isSubmitting}
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="+7 (999) 123-45-67" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={handleFormInteraction}
                  maxLength="13"
                  required 
                  disabled={isSubmitting}
                />
                <button type="submit" disabled={isSubmitting || !formData.name.trim() || !formData.phone.trim()}>
                  {isSubmitting ? '⏳ Отправляем...' : '🎁 Получить предложение'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      <div className="floating-contacts">
        <button 
          className="contact-btn operator"
          onClick={openChat}
          aria-label="Оператор"
        >
          <img src="/images/operator.webp" alt="Оператор" />
        </button>
        
        <a 
          href="https://wa.me/79000000000" 
          className="contact-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <img src="/icons/whatsapp.svg" alt="WhatsApp" />
        </a>
        
        <a 
          href="https://t.me/mixon_support" 
          className="contact-btn telegram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <img src="/icons/telegram.svg" alt="Telegram" />
        </a>
        
        <a 
          href="tel:+79000000000" 
          className="contact-btn phone"
          aria-label="Позвонить"
        >
          <img src="/icons/phone.svg" alt="Phone" />
        </a>
      </div>
    </>
  )
}