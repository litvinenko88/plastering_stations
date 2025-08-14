'use client'
import { useState, useEffect } from 'react'
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

  useEffect(() => {
    // Обратный отсчет акции
    const actionInterval = setInterval(() => {
      setActionSeconds(prev => {
        if (prev > 0) return prev - 1
        
        setActionMinutes(prevMinutes => {
          if (prevMinutes > 0) return prevMinutes - 1
          
          setActionHours(prevHours => {
            if (prevHours > 0) return prevHours - 1
            
            setActionDays(prevDays => {
              if (prevDays > 0) return prevDays - 1
              return 7
            })
            return 23
          })
          return 59
        })
        return 59
      })
    }, 1000)

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
        
        // Второе сообщение через 20 секунд
        setTimeout(() => {
          const secondMessage = {
            id: 2,
            text: 'У нас сейчас действует специальное предложение на покупку станции. Оставьте свои контакты и я расскажу вам более подробно',
            timestamp: Date.now()
          }
          setMessages(prev => [...prev, secondMessage])
          setShowSpecialOffer(true)
          
          // Скрыть через 10 секунд
          setTimeout(() => {
            setShowSpecialOffer(false)
          }, 10000)
        }, 20000)
      }, 8000)
    }, 15000)

    return () => {
      clearTimeout(firstTimer)
      clearInterval(actionInterval)
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
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
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
              <input type="text" placeholder="Ваше имя" required />
              <input type="tel" placeholder="Ваш телефон" required />
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
                <input type="text" placeholder="Ваше имя" required />
                <input type="tel" placeholder="Ваш телефон" required />
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