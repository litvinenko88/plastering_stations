'use client'
import './FloatingContacts.css'

export default function FloatingContacts() {

  return (
    <>
      <div className="floating-contacts">
        <div className="contact-btn operator" aria-label="Оператор">
          <img src="/images/operator.webp" alt="Оператор" />
        </div>
        
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