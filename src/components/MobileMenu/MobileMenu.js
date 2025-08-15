'use client'
import { useState, useEffect } from 'react'
import './MobileMenu.css'

export default function MobileMenu({ navItems }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [timeoutIds, setTimeoutIds] = useState([])
  
  // Валидация URL для предотвращения open redirect
  const isValidUrl = (url) => {
    if (!url) return false
    // Разрешаем только внутренние ссылки и якоря
    return url.startsWith('#') || url.startsWith('/') || url.startsWith('./')
  }
  
  // Очистка таймеров при размонтировании
  useEffect(() => {
    return () => {
      timeoutIds.forEach(id => clearTimeout(id))
    }
  }, [timeoutIds])

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
    const timeoutId = setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
      // Удаляем выполненный таймер
      setTimeoutIds(prev => prev.filter(id => id !== timeoutId))
    }, 250)
    setTimeoutIds(prev => [...prev, timeoutId])
  }

  const handleItemClick = (item) => {
    if (item.onClick && typeof item.onClick === 'function') {
      closeMenu()
      const timeoutId = setTimeout(() => {
        // Безопасный вызов функции без eval
        item.onClick()
        // Удаляем выполненный таймер
        setTimeoutIds(prev => prev.filter(id => id !== timeoutId))
      }, 250)
      setTimeoutIds(prev => [...prev, timeoutId])
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
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
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
                  isValidUrl(item.href) ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className="mobile-menu-item"
                      onClick={() => handleItemClick(item)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span
                      key={item.name}
                      className="mobile-menu-item disabled"
                      title="Недопустимая ссылка"
                    >
                      {item.name}
                    </span>
                  )
                )
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}