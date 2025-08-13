'use client'
import { useState } from 'react'
import './ConsultationForm.css'

export default function ConsultationForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agreement: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.agreement) {
      console.log('Отправка формы:', formData)
      // Здесь будет логика отправки
      alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
      onClose()
      setFormData({ name: '', phone: '', agreement: false })
    }
  }

  if (!isOpen) return null

  return (
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
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введите ваше имя"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Телефон *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (999) 123-45-67"
              required
            />
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
            disabled={!formData.name || !formData.phone || !formData.agreement}
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  )
}