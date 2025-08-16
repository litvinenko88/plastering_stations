'use client'
import { useState } from 'react'
import './FloatingContacts.css'
import OperatorNotification from '../OperatorNotification'

export default function FloatingContacts() {
  const [operatorClicked, setOperatorClicked] = useState(0)

  const handleOperatorClick = () => {
    // Увеличиваем счетчик для принудительного обновления
    setOperatorClicked(prev => prev + 1)
  }

  return (
    <>
      <OperatorNotification operatorClicked={operatorClicked} />
      <div className="floating-contacts">
        <button 
          className="contact-btn operator" 
          aria-label="Оператор"
          onClick={handleOperatorClick}
        >
          <img src="/images/operator.webp" alt="Оператор" />
        </button>
        
        <a 
          href="https://wa.me/79964179001" 
          className="contact-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <img src="/icons/whatsapp.svg" alt="WhatsApp" />
        </a>
        
        <a 
          href="https://t.me/litvinenko_n_v" 
          className="contact-btn telegram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <img src="/icons/telegram.svg" alt="Telegram" />
        </a>
        
        <a 
          href="tel:+79964179001" 
          className="contact-btn phone"
          aria-label="Позвонить"
        >
          <img src="/icons/phone.svg" alt="Phone" />
        </a>
      </div>
    </>
  )
}