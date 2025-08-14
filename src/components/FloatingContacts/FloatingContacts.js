'use client'
import { useState, useEffect } from 'react'
import { globalTimer } from '../../utils/timer'
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
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)
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
      setTimeout(() => {
        setShowOperatorMessage(false)
        
        // Второе сообщение через 20 секунд (только если не показано вручную)
        setTimeout(() => {
          if (!offerShownManually) {
            const secondMessage = {
              id: 2,
              text: 'У нас сейчас действует специальное предложение на покупку станции. Оставьте свои контакты и я расскажу вам более подробно',
              timestamp: Date.now()
            }
            setMessages(prev => [...prev, secondMessage])
            setShowSpecialOffer(true)
            
            // Скрыть через 10 секунд только если пользователь не взаимодействовал
            setTimeout(() => {
              if (!userInteracted) {
                setShowSpecialOffer(false)
              }
            }, 10000)
          }
        }, 20000)
      }, 8000)
    }, 15000)

    return () => {
      clearTimeout(firstTimer)
      globalTimer.unsubscribe(handleTimerUpdate)
    }
  }, [])

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

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setShowSpecialOffer(false)
    setShowSuccessNotification(true)
    
    // Скрыть уведомление через 3 секунды
    setTimeout(() => {
      setShowSuccessNotification(false)
    }, 3000)
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

      {showSuccessNotification && (
        <div className="success-notification">
          <div className="success-icon"></div>
          <div className="success-text">
            Данные успешно отправлены!
          </div>
        </div>
      )}

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
                placeholder="Ваше имя" 
                required 
                onFocus={handleFormInteraction}
              />
              <input 
                type="tel" 
                placeholder="Ваш телефон" 
                required 
                onFocus={handleFormInteraction}
              />
              <button type="submit">Получить предложение</button>
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
                  placeholder="Ваше имя" 
                  required 
                  onFocus={handleFormInteraction}
                />
                <input 
                  type="tel" 
                  placeholder="Ваш телефон" 
                  required 
                  onFocus={handleFormInteraction}
                />
                <button type="submit">Получить предложение</button>
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