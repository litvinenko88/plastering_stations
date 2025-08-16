'use client'
import { useState, useEffect } from 'react'
import { globalTimer } from '../../utils/timer'
import { validateForm, formatPhone, formatName } from '../../utils/validation'
import './OperatorNotification.css'

export default function OperatorNotification({ operatorClicked }) {
  const [notifications, setNotifications] = useState({
    first: { visible: false, closed: false },
    second: { visible: false, closed: false }
  })
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  const [timer, setTimer] = useState({ days: 5, hours: 14, minutes: 32, seconds: 45 })
  const [formData, setFormData] = useState({ name: '', phone: '', agreement: false })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const [formInteracted, setFormInteracted] = useState(false)
  const [firstNotificationShown, setFirstNotificationShown] = useState(false)
  const [secondNotificationShown, setSecondNotificationShown] = useState(false)

  useEffect(() => {
    const handleTimerUpdate = (time) => setTimer(time)
    globalTimer.subscribe(handleTimerUpdate)

    const firstTimer = setTimeout(() => {
      if (!notifications.first.closed && !chatOpen && !operatorClicked) {
        setNotifications(prev => ({ ...prev, first: { ...prev.first, visible: true } }))
        setFirstNotificationShown(true)
        
        setTimeout(() => {
          if (!userInteracted) {
            if (typeof document !== 'undefined') {
              const notification = document.querySelector('.first-notification')
              if (notification) {
                notification.classList.add('closing')
                setTimeout(() => {
                  setNotifications(prev => ({ ...prev, first: { visible: false, closed: true } }))
                }, 400)
              }
            }
            
            setTimeout(() => {
              if (!notifications.second.closed && !chatOpen && !operatorClicked && !userInteracted) {
                setNotifications(prev => ({ ...prev, second: { ...prev.second, visible: true } }))
                setSecondNotificationShown(true)
                
                setTimeout(() => {
                  if (!formInteracted) {
                    if (typeof document !== 'undefined') {
                      const notification = document.querySelector('.second-notification')
                      if (notification) {
                        notification.classList.add('closing')
                        setTimeout(() => {
                          setNotifications(prev => ({ ...prev, second: { visible: false, closed: true } }))
                        }, 400)
                      }
                    }
                  }
                }, 12000)
              }
            }, 20000)
          }
        }, 10000)
      }
    }, 12000)

    return () => {
      clearTimeout(firstTimer)
      globalTimer.unsubscribe(handleTimerUpdate)
    }
  }, [])

  useEffect(() => {
    if (operatorClicked > 0) {
      handleOperatorClick()
    }
  }, [operatorClicked])

  const handleFirstNotificationClick = () => {
    setUserInteracted(true)
    if (typeof document !== 'undefined') {
      const notification = document.querySelector('.first-notification')
      if (notification) {
        notification.classList.add('closing')
        setTimeout(() => {
          setNotifications(prev => ({ ...prev, first: { visible: false, closed: true } }))
        }, 400)
      }
      const quizButton = document.querySelector('[data-quiz-trigger]')
      if (quizButton) quizButton.click()
    }
  }

  const handleOperatorClick = () => {
    setNotifications({
      first: { visible: false, closed: true },
      second: { visible: false, closed: true }
    })
    
    setChatOpen(true)
    
    const messages = [{
      id: Date.now(),
      text: "Здравствуйте! Готов помочь вам подобрать штукатурную станцию, для ваших объектов",
      type: 'operator',
      timestamp: new Date()
    }]
    
    setChatMessages(messages)
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "Сейчас у нас действует специальное предложение, на покупку штукатурных станции, хотите узнать подробнее?",
        type: 'operator',
        timestamp: new Date(),
        hasSpecialOffer: true
      }])
    }, 1500)
  }

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target
    
    setFormInteracted(true)
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }))
      return
    }
    
    let newValue = value
    if (name === 'name') newValue = formatName(value)
    if (name === 'phone') newValue = formatPhone(value)
    
    setFormData(prev => ({ ...prev, [name]: newValue }))
    
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    const validation = validateForm(formData)
    if (!validation.isValid) {
      setFormErrors(validation.errors)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const { sendToTelegram } = await import('../../utils/telegram')
      const result = await sendToTelegram(formData, 'Специальное предложение - Уведомление оператора')
      
      if (result.success) {
        setFormSubmitted(true)
        setFormData({ name: '', phone: '', agreement: false })
        setFormErrors({})
        
        setTimeout(() => {
          if (typeof document !== 'undefined') {
            const notification = document.querySelector('.second-notification')
            if (notification) {
              notification.classList.add('closing')
              setTimeout(() => {
                setNotifications(prev => ({ ...prev, second: { visible: false, closed: true } }))
              }, 400)
            }
          }
        }, 3000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeSecondNotification = () => {
    if (typeof document !== 'undefined') {
      const notification = document.querySelector('.second-notification')
      if (notification) {
        notification.classList.add('closing')
        setTimeout(() => {
          setNotifications(prev => ({ ...prev, second: { visible: false, closed: true } }))
        }, 400)
      }
    }
  }

  return (
    <>
      {notifications.first.visible && (
        <div className="operator-notification first-notification">
          <div className="notification-content">
            <div className="notification-avatar">
              <img src="/images/operator.webp" alt="Оператор" />
            </div>
            <div className="notification-message">
              <p>Здравствуйте! Готов помочь вам подобрать штукатурную станцию, для ваших объектов</p>
              <button 
                className="notification-btn"
                onClick={handleFirstNotificationClick}
              >
                Подобрать станцию
              </button>
            </div>
          </div>
          <div className="notification-tail"></div>
        </div>
      )}

      {notifications.second.visible && (
        <div className="operator-notification second-notification">
          <button 
            className="notification-close"
            onClick={closeSecondNotification}
          >
            ×
          </button>
          <div className="notification-content">
            <div className="notification-message">
              <p>Сейчас у нас действует специальное предложение, на покупку штукатурных станции, хотите узнать подробнее?</p>
              
              <div className="special-timer">
                <p>Специальное предложение действует:</p>
                <div className="timer-display">
                  <span className="timer-part">{timer.days}д</span>
                  <span className="timer-part">
                    {timer.hours.toString().padStart(2, '0')}:
                    {timer.minutes.toString().padStart(2, '0')}:
                    {timer.seconds.toString().padStart(2, '0')}
                  </span>
                </div>
              </div>

              {!formSubmitted ? (
                <form className="notification-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleFormChange}
                      className={formErrors.name ? 'error' : ''}
                      maxLength="20"
                      required
                    />
                    {formErrors.name && <span className="error-text">{formErrors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className={formErrors.phone ? 'error' : ''}
                      maxLength="13"
                      required
                    />
                    {formErrors.phone && <span className="error-text">{formErrors.phone}</span>}
                  </div>
                  
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleFormChange}
                      required
                    />
                    <label htmlFor="agreement">
                      Согласие на обработку персональных данных
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting || !formData.name || !formData.phone || !formData.agreement}
                  >
                    {isSubmitting ? 'Отправляем...' : 'Отправить'}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <p>Спасибо! Мы получили вашу заявку и скоро свяжемся с вами</p>
                </div>
              )}
            </div>
          </div>
          <div className="notification-tail"></div>
        </div>
      )}

      {chatOpen && (
        <div className="operator-chat">
          <div className="chat-header">
            <div className="chat-operator">
              <img src="/images/operator.webp" alt="Оператор" />
              <span>Оператор онлайн</span>
            </div>
            <button 
              className="chat-close"
              onClick={() => setChatOpen(false)}
            >
              ×
            </button>
          </div>
          
          <div className="chat-messages">
            {chatMessages.map(message => (
              <div key={message.id} className={`chat-message ${message.type}`}>
                <div className="message-content">
                  <p>{message.text}</p>
                  {message.hasSpecialOffer && (
                    <div className="chat-special-offer">
                      <div className="special-timer">
                        <p>Специальное предложение действует:</p>
                        <div className="timer-display">
                          <span className="timer-part">{timer.days}д</span>
                          <span className="timer-part">
                            {timer.hours.toString().padStart(2, '0')}:
                            {timer.minutes.toString().padStart(2, '0')}:
                            {timer.seconds.toString().padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      
                      {!formSubmitted ? (
                        <form className="chat-form" onSubmit={handleFormSubmit}>
                          <input
                            type="text"
                            name="name"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleFormChange}
                            maxLength="20"
                            required
                          />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+7 (999) 123-45-67"
                            value={formData.phone}
                            onChange={handleFormChange}
                            maxLength="13"
                            required
                          />
                          <div className="checkbox-group">
                            <input
                              type="checkbox"
                              id="chat-agreement"
                              name="agreement"
                              checked={formData.agreement}
                              onChange={handleFormChange}
                              required
                            />
                            <label htmlFor="chat-agreement">
                              Согласие на обработку данных
                            </label>
                          </div>
                          <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Отправляем...' : 'Отправить'}
                          </button>
                        </form>
                      ) : (
                        <div className="success-message">
                          <p>Спасибо! Мы получили вашу заявку и скоро свяжемся с вами</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}