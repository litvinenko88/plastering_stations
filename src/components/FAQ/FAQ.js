'use client'
import { useState } from 'react'
import './FAQ.css'

export default function FAQ() {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqData = [
    {
      question: 'Какая станция лучше для новичка?',
      answer: 'Для начинающих рекомендуем «Профи-220» – простая в управлении, работает от розетки 220В.'
    },
    {
      question: 'Можно ли купить штукатурную станцию в рассрочку?',
      answer: 'Да, оформляем рассрочку 0% на 6-12 месяцев для покупки штукатурной станции.'
    },
    {
      question: 'Как быстро мастер окупит оборудование?',
      answer: 'При профессиональном использовании – за 1-3 месяца.'
    },
    {
      question: 'Можно ли использовать для цементных смесей?',
      answer: 'Да, большинство моделей работают с гипсом, цементом и известковыми растворами.'
    },
    {
      question: 'Почему не стоит покупать б/у?',
      answer: 'Б/у оборудование часто имеет скрытые дефекты и изношенные узлы, дефекты поверхностей.'
    },
    {
      question: 'Какая дальность и высота подачи?',
      answer: 'До 50 м с шлангом высокого давления подачи воды'
    },
    {
      question: 'Как повысить производительность труда?',
      answer: 'Используйте механизированную штукатурку – экономия времени и материалов.'
    },
    {
      question: 'Какое обслуживание требуется?',
      answer: 'Регулярная очистка смесительной камеры и шнека.'
    },
    {
      question: 'Есть ли обучение?',
      answer: 'Да, проводим инструктаж на объекте или онлайн.'
    },
    {
      question: 'Какие гарантии?',
      answer: 'Гарантия от 1 до 3 лет в зависимости от модели.'
    },
    {
      question: 'Какой срок доставки?',
      answer: 'От 1 до 5 дней в зависимости от региона.'
    }
  ]

  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="faq-title">Частые вопросы</h2>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openItems[index] ? 'active' : ''}`}
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <span className={`faq-icon ${openItems[index] ? 'rotated' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div className={`faq-answer ${openItems[index] ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}