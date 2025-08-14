'use client'
import { useState } from 'react'
import './ConsultationForm.css'
import Notification from '../Notification/Notification'

export default function ConsultationForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agreement: false
  })
  const [errors, setErrors] = useState({ name: '', phone: '' })
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }))
      return
    }
    
    let newValue = value
    let error = ''
    
    if (name === 'name') {
      newValue = value.slice(0, 10)
      if (newValue.length < 2) {
        error = 'Имя должно содержать минимум 2 символа'
      }
    }
    
    if (name === 'phone') {
      newValue = value.replace(/[^+\d]/g, '').slice(0, 13)
      const phoneRegex = /^\+?[1-9]\d{10,11}$/
      if (newValue && !phoneRegex.test(newValue)) {
        error = 'Введите номер в формате +7XXXXXXXXXX'
      }
    }
    
    setFormData(prev => ({ ...prev, [name]: newValue }))
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (errors.name || errors.phone || !formData.name || !formData.phone || !formData.agreement) {
      return
    }
    
    if (formData.name && formData.phone && formData.agreement) {
      const { sendToTelegram } = await import('../../utils/telegram')
      const result = await sendToTelegram(formData, 'Кнопка Консультация в хедере')
      
      if (result.success) {
        setNotification({ 
          show: true, 
          message: 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время!', 
          type: 'success' 
        })
        setFormData({ name: '', phone: '', agreement: false })
        setTimeout(() => onClose(), 1000)
      } else {
        setNotification({ 
          show: true, 
          message: 'Ошибка отправки. Попробуйте позже.', 
          type: 'error' 
        })
      }
    }
  }

  if (!isOpen) return null

  return (
    <>
      <Notification 
        message={notification.message}
        type={notification.type}
        isVisible={notification.show}
        onClose={() => setNotification({ ...notification, show: false })}
      />
      <div className="consultation-overlay" onClick={onClose}>
        <div className="consultation-modal" onClick={(e) => e.stopPropagation()}>
        <button 
          className="consultation-close"
          onClick={onClose}
          aria-label="Закрыть форму"
        >
          ×
        </button>
        
        <h2 className="consultation-title">
          Получить консультацию
        </h2>
        
        <form className="consultation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Ваше имя *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Введите ваше имя"
              maxLength="10"
              required
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Телефон *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`form-input ${errors.phone ? 'error' : ''}`}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (999) 123-45-67"
              maxLength="13"
              required
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>
          
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              className="checkbox-input"
              checked={formData.agreement}
              onChange={handleChange}
              required
            />
            <label className="checkbox-label" htmlFor="agreement">
              Я согласен на обработку персональных данных в соответствии с политикой конфиденциальности
            </label>
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={!formData.name || !formData.phone || !formData.agreement || errors.name || errors.phone}
          >
            Отправить заявку
          </button>
        </form>
        </div>
      </div>
    </>
  )
}