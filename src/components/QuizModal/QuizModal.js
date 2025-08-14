'use client'
import { useState, useEffect } from 'react'
import './QuizModal.css'
import Notification from '../Notification/Notification'

export default function QuizModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', agreed: false })
  const [errors, setErrors] = useState({ name: '', phone: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' })

  const questions = [
    {
      id: 'workType',
      title: 'Какой тип работ планируете?',
      options: [
        { value: 'interior', label: 'Внутренняя отделка квартир, офисов' },
        { value: 'construction', label: 'Строительные объекты, фасады' },
        { value: 'mixed', label: 'Разные виды работ' }
      ]
    },
    {
      id: 'volume',
      title: 'Какой объем работ в месяц?',
      options: [
        { value: 'small', label: 'До 500 м² (небольшие объекты)' },
        { value: 'medium', label: '500-2000 м² (средние объекты)' },
        { value: 'large', label: 'Более 2000 м² (крупные объекты)' }
      ]
    },
    {
      id: 'power',
      title: 'Какое электропитание доступно?',
      options: [
        { value: '220v', label: '220В (обычная розетка)' },
        { value: '380v', label: '380В (трехфазная сеть)' },
        { value: 'both', label: 'Могу подключить любое' }
      ]
    },
    {
      id: 'budget',
      title: 'Какой бюджет на оборудование?',
      options: [
        { value: 'budget', label: 'До 450 000 ₽' },
        { value: 'medium', label: '450 000 - 600 000 ₽' },
        { value: 'premium', label: 'Более 600 000 ₽' }
      ]
    }
  ]

  const products = [
    { name: 'PERSONIYA V-1', price: '408 000 ₽', power: '230В', productivity: '4-14 л/мин', description: 'Компактная модель для небольших объемов' },
    { name: 'PERSONIYA V-1 PLUS', price: '428 000 ₽', power: '230В', productivity: '10-20 л/мин', description: 'Улучшенная модель с повышенной производительностью' },
    { name: 'PERSONIYA V380', price: '535 000 ₽', power: '380В', productivity: '15-35 л/мин', description: 'Промышленная станция для больших объемов' },
    { name: 'PERSONIYA 220/380', price: 'от 650 000 ₽', power: '220/380В', productivity: '20 л/мин', description: 'Универсальная станция с высокой производительностью' }
  ]

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

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: value }
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(questions.length)
    }
  }

  const getRecommendations = () => {
    const { workType, volume, power, budget } = answers
    let recommendations = []
    
    // Логика подбора на основе ответов
    if (volume === 'small' && budget === 'budget') {
      recommendations.push(products[0]) // PERSONIYA V-1
    }
    
    if (volume === 'small' && (budget === 'medium' || budget === 'premium')) {
      recommendations.push(products[1]) // PERSONIYA V-1 PLUS
    }
    
    if (volume === 'medium' && power === '380v') {
      recommendations.push(products[2]) // PERSONIYA V380
    }
    
    if (volume === 'large' || (workType === 'construction' && budget === 'premium')) {
      recommendations.push(products[3]) // PERSONIYA 220/380
    }
    
    if (power === 'both' && budget !== 'budget') {
      recommendations.push(products[3]) // PERSONIYA 220/380
    }
    
    // Если нет специфичных рекомендаций, показываем популярные
    if (recommendations.length === 0) {
      recommendations = [products[1], products[2]] // V-1 PLUS и V380
    }
    
    // Убираем дубликаты и ограничиваем до 2
    return [...new Set(recommendations)].slice(0, 2)
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowForm(false)
    setIsSubmitted(false)
  }

  const handleClose = () => {
    resetQuiz()
    onClose()
  }

  const formatQuizResults = () => {
    const questionMap = {
      workType: 'Какой тип работ планируете?',
      volume: 'Какой объем работ в месяц?',
      power: 'Какое электропитание доступно?',
      budget: 'Какой бюджет на оборудование?'
    }
    
    const answerMap = {
      interior: 'Внутренняя отделка квартир, офисов',
      construction: 'Строительные объекты, фасады',
      mixed: 'Разные виды работ',
      small: 'До 500 м² (небольшие объекты)',
      medium: '500-2000 м² (средние объекты)',
      large: 'Более 2000 м² (крупные объекты)',
      '220v': '220В (обычная розетка)',
      '380v': '380В (трехфазная сеть)',
      both: 'Могу подключить любое',
      budget: 'До 450 000 ₽',
      medium: '450 000 - 600 000 ₽',
      premium: 'Более 600 000 ₽'
    }
    
    let result = 'Ответы на вопросы:\n'
    Object.entries(answers).forEach(([key, value]) => {
      result += `${questionMap[key]}: ${answerMap[value]}\n`
    })
    
    const recommendations = getRecommendations()
    result += '\nРекомендации:\n'
    recommendations.forEach((product, index) => {
      result += `${index + 1}. ${product.name} - ${product.price}\n`
    })
    
    return result
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    if (errors.name || errors.phone || !formData.name || !formData.phone || !formData.agreed) {
      return
    }
    
    const { sendToTelegram } = await import('../../utils/telegram')
    const quizData = {
      name: formData.name,
      phone: formData.phone,
      message: formatQuizResults()
    }
    
    const result = await sendToTelegram(quizData, 'Квиз подбора станции')
    
    if (result.success) {
      setNotification({ 
        show: true, 
        message: 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами!', 
        type: 'success' 
      })
      setFormData({ name: '', phone: '', agreed: false })
      setTimeout(() => handleClose(), 2000)
    } else {
      setNotification({ 
        show: true, 
        message: 'Ошибка отправки. Попробуйте позже.', 
        type: 'error' 
      })
    }
  }

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

  if (!isOpen) return null

  return (
    <>
      <Notification 
        message={notification.message}
        type={notification.type}
        isVisible={notification.show}
        onClose={() => setNotification({ ...notification, show: false })}
      />
      <div className="quiz-modal-overlay" onClick={handleClose}>
        <div className="quiz-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quiz-close" onClick={handleClose}>✕</button>

        <div className="quiz-content">
          {showForm ? (
            isSubmitted ? (
              <div className="quiz-success">
                <div className="success-icon">✅</div>
                <h2>Заявка отправлена!</h2>
                <p>Наш специалист свяжется с вами в течение 15 минут</p>
              </div>
            ) : (
              <div className="quiz-form">
                <h2>Получить консультацию</h2>
                <form onSubmit={handleFormSubmit}>
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
                  
                  <button 
                    type="submit" 
                    disabled={!formData.name || !formData.phone || !formData.agreed || errors.name || errors.phone}
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            )
          ) : currentStep < questions.length ? (
            <>
              <div className="quiz-progress">
                <div 
                  className="quiz-progress-bar"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>

              <h2 className="quiz-title">{questions[currentStep].title}</h2>
              
              <div className="quiz-options">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    className="quiz-option"
                    onClick={() => handleAnswer(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="quiz-result">
              <h2>Рекомендуем для вас:</h2>
              <div className="quiz-recommendations">
                {getRecommendations().map((product, index) => (
                  <div key={index} className="recommendation-card">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-specs">
                      <span>Питание: {product.power}</span>
                      <span>Производительность: {product.productivity}</span>
                    </div>
                    <div className="product-price">{product.price}</div>
                  </div>
                ))}
              </div>
              <div className="quiz-actions">
                <button className="quiz-restart" onClick={resetQuiz}>
                  Пройти заново
                </button>
                <button className="quiz-consultation" onClick={() => setShowForm(true)}>
                  Узнать подробнее
                </button>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  )
}