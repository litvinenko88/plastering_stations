'use client'
import { useState, useEffect } from 'react'
import './OrderModal.css'
import Notification from '../Notification/Notification'

export default function OrderModal({ product, isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', phone: '', agreed: false })
  const [errors, setErrors] = useState({ name: '', phone: '' })
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleFormChange = (e) => {
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
    
    if (errors.name || errors.phone || !formData.name || !formData.phone || !formData.agreed) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const { sendToTelegram } = await import('../../utils/telegram')
      const orderData = {
        name: formData.name,
        phone: formData.phone,
        message: `Интерес к модели: ${product.name} - ${product.price}`
      }
      
      const result = await sendToTelegram(orderData, `Заказ из карточки товара: ${product.name}`)
      
      if (result.success) {
        setNotification({ 
          show: true, 
          message: '🎉 Заявка отправлена! Наш специалист свяжется с вами для консультации по выбранной модели!', 
          type: 'success' 
        })
        setFormData({ name: '', phone: '', agreed: false })
        setTimeout(() => {
          setNotification(prev => ({ ...prev, show: false }))
        }, 3000)
        setTimeout(() => onClose(), 4000)
      } else {
        setNotification({ 
          show: true, 
          message: '❌ Произошла ошибка при отправке. Попробуйте еще раз или позвоните нам.', 
          type: 'error' 
        })
      }
    } catch (error) {
      setNotification({ 
        show: true, 
        message: '❌ Ошибка соединения. Проверьте интернет и попробуйте снова.', 
        type: 'error' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen || !product) return null

  return (
    <>
      <div className="order-modal-overlay" onClick={onClose}>
        <div className="order-modal" onClick={(e) => e.stopPropagation()}>
          <button className="order-modal-close" onClick={onClose}>✕</button>
          
          <div className="order-modal-content" style={{ position: 'relative' }}>
            <div className="order-modal-header">
              <div className="product-preview">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
            </div>

            <div className="order-form" style={{ position: 'relative' }}>
              {/* Уведомление формы */}
              {notification.show && (
                <div style={{
                  position: 'absolute',
                  top: '-60px',
                  left: '0',
                  right: '0',
                  zIndex: 1000,
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: notification.type === 'success' 
                    ? 'linear-gradient(135deg, #10b981, #059669)' 
                    : 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  animation: 'slideDown 0.3s ease-out'
                }}>
                  {notification.message}
                </div>
              )}
              
              <h2>Оформить заказ</h2>
              <p>Заполните форму и мы свяжемся с вами для уточнения деталей</p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Ваше имя *</label>
                  <input
                    type="text"
                    name="name"
                    className={errors.name ? 'error' : ''}
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={handleFormChange}
                    maxLength="10"
                    required
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label className="form-label">Телефон *</label>
                  <input
                    type="tel"
                    name="phone"
                    className={errors.phone ? 'error' : ''}
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={handleFormChange}
                    maxLength="13"
                    required
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
                
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="agreed"
                    name="agreed"
                    className="checkbox-input"
                    checked={formData.agreed}
                    onChange={handleFormChange}
                    required
                  />
                  <label htmlFor="agreed" className="checkbox-label">
                    Согласен на обработку персональных данных
                  </label>
                </div>
                
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={onClose}
                  >
                    Отмена
                  </button>
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={!formData.name || !formData.phone || !formData.agreed || errors.name || errors.phone || isSubmitting}
                  >
                    {isSubmitting ? '⏳ Отправляем...' : '📤 Отправить заявку'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}