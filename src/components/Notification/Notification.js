'use client'
import { useEffect, useState } from 'react'
import './Notification.css'

export default function Notification({ message, type = 'success', isVisible, onClose }) {
  const [isClosing, setIsClosing] = useState(false)
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        handleClose()
      }, 5000) // Увеличиваем время показа до 5 секунд
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])
  
  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 300)
  }
  
  const getIcon = () => {
    switch (type) {
      case 'success':
        return '🎉'
      case 'error':
        return '⚠️'
      case 'info':
        return 'ℹ️'
      case 'warning':
        return '⚠️'
      default:
        return '✅'
    }
  }

  if (!isVisible) return null

  return (
    <div className={`notification ${type} ${isClosing ? 'closing' : ''}`}>
      <div className="notification-content">
        <span className="notification-icon">
          {getIcon()}
        </span>
        <span className="notification-message">{message}</span>
        <button className="notification-close" onClick={handleClose} aria-label="Закрыть уведомление">
          ×
        </button>
      </div>
    </div>
  )
}