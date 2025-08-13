'use client'
import { useState } from 'react'
import './MobileMenu.css'

export default function MobileMenu({ navItems, onConsultationClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu()
    } else {
      setIsOpen(true)
      setIsClosing(false)
    }
  }

  const closeMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 250)
  }

  const handleItemClick = (item) => {
    if (item.onClick) {
      closeMenu()
      setTimeout(() => {
        item.onClick()
      }, 250)
    } else {
      closeMenu()
    }
  }

  return (
    <div className="mobile-menu">
      {/* Кнопка гамбургер */}
      <button 
        onClick={toggleMenu}
        className="mobile-menu-btn"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        <svg 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          style={{ 
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Оверлей и меню */}
      {isOpen && (
        <>
          <div 
            className={`mobile-menu-overlay ${isClosing ? 'closing' : ''}`}
            onClick={closeMenu}
          ></div>
          <div className={`mobile-menu-panel ${isClosing ? 'closing' : ''}`}>
            <div className="mobile-menu-content">
              {navItems.map((item) => (
                item.onClick ? (
                  <button
                    key={item.name}
                    onClick={() => handleItemClick(item)}
                    className={`mobile-menu-item ${item.isConsultation ? 'contact' : ''}`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="mobile-menu-item"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}