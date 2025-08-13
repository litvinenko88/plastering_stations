'use client'
import { useState } from 'react'
import './Header.css'
import MobileMenu from '../MobileMenu/MobileMenu'
import ConsultationForm from '../ConsultationForm/ConsultationForm'

export default function Header() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  const navItems = [
    { name: 'Каталог', href: '#catalog' },
    { name: 'Подобрать', href: '#select' },
    { name: 'Преимущества', href: '#advantages' },
    { name: 'Контакты', href: '#contacts' },
    { name: 'Консультация', onClick: () => setIsConsultationOpen(true), isConsultation: true }
  ]

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            {/* Логотип */}
            <a href="#" className="logo">
              MIXON
            </a>

            {/* Десктопная навигация */}
            <nav className="nav">
              <ul className="nav-list">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.onClick ? (
                      <button 
                        onClick={item.onClick}
                        className={`nav-link ${item.isConsultation ? 'contact' : ''}`}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <a 
                        href={item.href}
                        className="nav-link"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Мобильное меню */}
            <MobileMenu navItems={navItems} onConsultationClick={() => setIsConsultationOpen(true)} />
          </div>
        </div>
      </header>

      {/* Форма консультации */}
      <ConsultationForm 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </>
  )
}