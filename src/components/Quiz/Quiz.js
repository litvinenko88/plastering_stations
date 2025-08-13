'use client'
import { useState } from 'react'
import './Quiz.css'

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      question: 'Какой тип объекта вы планируете штукатурить?',
      options: [
        { id: 'apartment', text: 'Квартира или дом', points: { compact: 3, standard: 2, professional: 1 } },
        { id: 'office', text: 'Офис или магазин', points: { compact: 2, standard: 3, professional: 2 } },
        { id: 'construction', text: 'Новостройка или крупный объект', points: { compact: 1, standard: 2, professional: 3 } }
      ]
    },
    {
      question: 'Какая у вас площадь работ?',
      options: [
        { id: 'small', text: 'До 100 м²', points: { compact: 3, standard: 2, professional: 1 } },
        { id: 'medium', text: '100-500 м²', points: { compact: 2, standard: 3, professional: 2 } },
        { id: 'large', text: 'Более 500 м²', points: { compact: 1, standard: 2, professional: 3 } }
      ]
    },
    {
      question: 'Какое у вас электропитание?',
      options: [
        { id: '220v', text: 'Только 220В', points: { compact: 3, standard: 2, professional: 1 } },
        { id: 'both', text: '220В и 380В', points: { compact: 2, standard: 3, professional: 3 } },
        { id: '380v', text: 'Только 380В', points: { compact: 1, standard: 2, professional: 3 } }
      ]
    },
    {
      question: 'Ваш опыт работы со штукатурными станциями?',
      options: [
        { id: 'beginner', text: 'Новичок', points: { compact: 3, standard: 2, professional: 1 } },
        { id: 'experienced', text: 'Есть опыт', points: { compact: 2, standard: 3, professional: 2 } },
        { id: 'professional', text: 'Профессионал', points: { compact: 1, standard: 2, professional: 3 } }
      ]
    }
  ]

  const recommendations = {
    compact: {
      title: 'Рекомендуем компактные модели',
      description: 'Для ваших задач идеально подойдут станции "Компакт-150" или "Мини-100"',
      models: ['Компакт-150', 'Мини-100', 'Экстра-200']
    },
    standard: {
      title: 'Рекомендуем стандартные модели',
      description: 'Оптимальный выбор - станции "Профи-220" или "Стандарт-300"',
      models: ['Профи-220', 'Стандарт-300', 'Экспресс-250']
    },
    professional: {
      title: 'Рекомендуем профессиональные модели',
      description: 'Для ваших объемов нужны мощные станции "Мастер-500" или "Турбо-600"',
      models: ['Мастер-500', 'Турбо-600', 'Монолит-700']
    }
  }

  const handleAnswer = (optionId) => {
    setAnswers({ ...answers, [currentStep]: optionId })
  }

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateResult()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const calculateResult = () => {
    const scores = { compact: 0, standard: 0, professional: 0 }
    
    Object.entries(answers).forEach(([stepIndex, answerId]) => {
      const question = questions[stepIndex]
      const option = question.options.find(opt => opt.id === answerId)
      if (option) {
        Object.entries(option.points).forEach(([category, points]) => {
          scores[category] += points
        })
      }
    })

    const bestCategory = Object.entries(scores).reduce((a, b) => scores[a[0]] > scores[b[0]] ? a : b)[0]
    setShowResult(bestCategory)
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
  }

  if (showResult) {
    const result = recommendations[showResult]
    return (
      <section id="quiz" className="quiz">
        <div className="quiz-container">
          <div className="quiz-step">
            <div className="quiz-result">
              <h3>{result.title}</h3>
              <p>{result.description}</p>
              <div style={{ marginBottom: '2rem' }}>
                <strong>Подходящие модели:</strong>
                <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0' }}>
                  {result.models.map((model, index) => (
                    <li key={index} style={{ 
                      padding: '0.5rem',
                      background: 'var(--color-secondary)',
                      margin: '0.5rem 0',
                      borderRadius: '0.5rem'
                    }}>
                      Станция "{model}"
                    </li>
                  ))}
                </ul>
              </div>
              <div className="quiz-buttons">
                <button className="quiz-btn secondary" onClick={resetQuiz}>
                  Пройти заново
                </button>
                <button className="quiz-btn primary">
                  Получить консультацию
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <section id="quiz" className="quiz">
      <div className="quiz-container">
        <h2 className="quiz-title">Подберите идеальную станцию</h2>
        
        <div className="quiz-step">
          <div className="quiz-progress">
            <span>Шаг {currentStep + 1} из {questions.length}</span>
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span>{Math.round(progress)}%</span>
          </div>
          
          <div className="quiz-question">
            {currentQuestion.question}
          </div>
          
          <div className="quiz-options">
            {currentQuestion.options.map((option) => (
              <div
                key={option.id}
                className={`quiz-option ${answers[currentStep] === option.id ? 'selected' : ''}`}
                onClick={() => handleAnswer(option.id)}
              >
                {option.text}
              </div>
            ))}
          </div>
          
          <div className="quiz-buttons">
            <button 
              className="quiz-btn secondary" 
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              Назад
            </button>
            <button 
              className="quiz-btn primary" 
              onClick={nextStep}
              disabled={!answers[currentStep]}
            >
              {currentStep === questions.length - 1 ? 'Получить результат' : 'Далее'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}