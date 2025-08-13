'use client'
import { useState, useEffect } from 'react'
import './FloatingContacts.css'

export default function FloatingContacts() {
  const [showOperatorMessage, setShowOperatorMessage] = useState(false)

  useEffect(() => {
    // Показываем сообщение оператора через 10 секунд
    const timer = setTimeout(() => {
      setShowOperatorMessage(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const closeOperatorMessage = () => {
    setShowOperatorMessage(false)
  }

  return (
    <>
      {showOperatorMessage && (
        <div className="operator-message">
          <button className="operator-close" onClick={closeOperatorMessage}>
            ×
          </button>
          <div className="operator-avatar">М</div>
          <div className="operator-text">
            Здравствуйте! Помочь подобрать штукатурную станцию под ваши задачи?
          </div>
        </div>
      )}
      
      <div className="floating-contacts">
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