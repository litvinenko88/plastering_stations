'use client'
import { useState, useEffect } from 'react'
import './QuizModal.css'

export default function QuizModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', agreed: false })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const questions = [
    {
      id: 'usage',
      title: 'Для каких работ нужна станция?',
      options: [
        { value: 'interior', label: 'Внутренние работы' },
        { value: 'exterior', label: 'Наружные работы' },
        { value: 'both', label: 'Внутренние и наружные' }
      ]
    },
    {
      id: 'area',
      title: 'Какая площадь работ?',
      options: [
        { value: 'small', label: 'До 100 м²' },
        { value: 'medium', label: '100-500 м²' },
        { value: 'large', label: 'Более 500 м²' }
      ]
    },
    {
      id: 'power',
      title: 'Какое питание доступно?',
      options: [
        { value: '220v', label: '220В (бытовая сеть)' },
        { value: '380v', label: '380В (промышленная сеть)' },
        { value: 'any', label: 'Любое' }
      ]
    },
    {
      id: 'budget',
      title: 'Какой бюджет?',
      options: [
        { value: 'low', label: 'До 150 000 ₽' },
        { value: 'medium', label: '150 000 - 300 000 ₽' },
        { value: 'high', label: 'Более 300 000 ₽' }
      ]
    },
    {
      id: 'experience',
      title: 'Опыт работы с оборудованием?',
      options: [
        { value: 'beginner', label: 'Новичок' },
        { value: 'experienced', label: 'Есть опыт' },
        { value: 'professional', label: 'Профессионал' }
      ]
    }
  ]

  const products = [
    { name: 'MIXON Компакт-150', price: '89 000 ₽', power: '220В', productivity: '15 м²/час' },
    { name: 'MIXON Профи-220', price: '145 000 ₽', power: '220В', productivity: '30 м²/час' },
    { name: 'MIXON Мастер-500', price: '289 000 ₽', power: '380В', productivity: '50 м²/час' },
    { name: 'MIXON Универсал-350', price: '199 000 ₽', power: '220/380В', productivity: '35 м²/час' }
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
    return products.slice(0, 2) // Возвращаем 2 рекомендации
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

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!formData.agreed) return
    
    const { sendToTelegram } = await import('../../utils/telegram')
    const quizData = {
      name: formData.name,
      phone: formData.phone,
      message: `Результаты квиза: ${JSON.stringify(answers, null, 2)}`
    }
    
    const result = await sendToTelegram(quizData, 'Квиз подбора станции')
    
    if (result.success) {
      setIsSubmitted(true)
      setTimeout(() => handleClose(), 2000)
    } else {
      alert('Ошибка отправки. Попробуйте позже.')
    }
  }

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  if (!isOpen) return null

  return (
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
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                  />
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleFormChange}
                      required
                    />
                    Согласен на обработку персональных данных
                  </label>
                  <button type="submit" disabled={!formData.agreed}>
                    Отправить
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
                  Получить консультацию
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}