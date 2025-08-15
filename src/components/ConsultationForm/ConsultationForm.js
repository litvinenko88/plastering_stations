'use client'
import { useState } from 'react'
import './ConsultationForm.css'
import Notification from '../Notification/Notification'
import { validateForm, formatPhone, formatName, getSuccessMessage } from '../../utils/validation'

export default function ConsultationForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agreement: false
  })
  const [errors, setErrors] = useState({ name: '', phone: '' })
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }))
      setErrors(prev => ({ ...prev, [name]: '' }))
      return
    }
    
    let newValue = value
    if (name === 'name') {
      newValue = formatName(value)
    } else if (name === 'phone') {
      newValue = formatPhone(value)
    }
    
    setFormData(prev => ({ ...prev, [name]: newValue }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validation = validateForm(formData)
    
    if (!validation.isValid) {
      setErrors(validation.errors)
      setNotification({ 
        show: true, 
        message: 'Пожалуйста, исправьте ошибки в форме', 
        type: 'error' 
      })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const { sendToTelegram } = await import('../../utils/telegram')
      const result = await sendToTelegram(formData, 'Форма консультации')
      
      if (result.success) {
        setIsSuccess(true)
        setNotification({ 
          show: true, 
          message: getSuccessMessage('consultation'), 
          type: 'success' 
        })
        setFormData({ name: '', phone: '', agreement: false })
        setErrors({})
        
        setTimeout(() => {
          onClose()
          setIsSuccess(false)
        }, 3000)
      } else {
        setNotification({ 
          show: true, 
          message: '❌ Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь с нами по телефону.', 
          type: 'error' 
        })
      }
    } catch (error) {
      setNotification({ 
        show: true, 
        message: '❌ Произошла ошибка при отправке. Проверьте подключение к интернету.', 
        type: 'error' 
      })
    } finally {
      setIsSubmitting(false)
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
        <div className={`consultation-modal ${isSuccess ? 'success-animation' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button 
          className="consultation-close"
          onClick={onClose}
          aria-label="Закрыть форму"
        >
          ×
        </button>
        
        <h2 className="consultation-title">
          {isSuccess ? '✅ Заявка отправлена!' : '📞 Получить консультацию'}
        </h2>
        
        {isSuccess && (
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white',
            borderRadius: '0.75rem',
            marginBottom: '1rem',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
          }}>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>
              Спасибо за обращение! 🚀
            </p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: '0.9' }}>
              Мы уже получили вашу заявку и скоро с вами свяжемся
            </p>
          </div>
        )}
        
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
              maxLength="20"
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
            disabled={!formData.name || !formData.phone || !formData.agreement || errors.name || errors.phone || isSubmitting || isSuccess}
          >
            {isSubmitting ? (
              <>
                <span style={{ display: 'inline-block', marginRight: '0.5rem' }}>⏳</span>
                Отправляем...
              </>
            ) : isSuccess ? (
              <>
                <span style={{ display: 'inline-block', marginRight: '0.5rem' }}>✅</span>
                Отправлено!
              </>
            ) : (
              <>
                <span style={{ display: 'inline-block', marginRight: '0.5rem' }}>📤</span>
                Отправить заявку
              </>
            )}
          </button>
        </form>
        </div>
      </div>
    </>
  )
}