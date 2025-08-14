'use client'
import { useState } from 'react'
import './FAQReviews.css'

export default function FAQReviews() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [currentReview, setCurrentReview] = useState(0)

  const faqData = [
    {
      question: 'Какая станция лучше для новичка?',
      answer: 'Для начинающих рекомендуем PERSONIYA V-1 – простая в управлении, работает от розетки 220В.'
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
      answer: 'До 30 м с шлангом высокого давления подачи воды'
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

  const reviews = [
    {
      name: 'Иван',
      company: 'строительная бригада (Москва)',
      text: 'Брали PERSONIYA V380 – за 2 месяца закрыли штукатуркой 3 новостройки. Оборудование не подвело ни разу! Высокая производительность',
      rating: 5
    },
    {
      name: 'Ольга',
      company: 'частный мастер (Казань)',
      text: 'Использую PERSONIYA V-1 для ремонтов – легкая, тихая, идеальна для квартир.',
      rating: 5
    },
    {
      name: 'Компания «СтройГрад»',
      company: 'Екатеринбург',
      text: 'Купили штукатурную станцию PERSONIYA 220/380 для ЖК. Производительность отличная – 20 л/мин.',
      rating: 5
    },
    {
      name: 'Александр',
      company: 'прораб (Краснодар)',
      text: 'PERSONIYA V-1 PLUS отлично справляется с цементными смесями. Рекомендую!',
      rating: 5
    },
    {
      name: 'Дмитрий',
      company: 'частный застройщик (Ростов-на-Дону)',
      text: 'PERSONIYA V-1 – отличный вариант для небольшого ремонта. Цена и качество на уровне.',
      rating: 5
    },
    {
      name: 'Сергей',
      company: 'ИП (Воронеж)',
      text: 'PERSONIYA V380 значительно ускорила работу на объекте. Доволен покупкой.',
      rating: 5
    },
    {
      name: 'Анна',
      company: 'дизайнер (Сочи)',
      text: 'PERSONIYA 220/380 – универсальная станция, работает от любого напряжения. Идеальное качество нанесения.',
      rating: 5
    },
    {
      name: 'Михаил',
      company: 'строитель (Самара)',
      text: 'PERSONIYA V-1 PLUS – золотая середина по цене и производительности, дефектов нет.',
      rating: 5
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="faq-reviews">
      <div className="container">
        <h2 className="section-title">Частые вопросы и отзывы клиентов</h2>
        
        <div className="faq-reviews-content">
          <div className="faq-section">
            <h3 className="faq-title">Частые вопросы</h3>
            <div className="faq-grid">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    {item.question}
                    <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                  </button>
                  <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reviews-section">
            <h3 className="reviews-title">Отзывы клиентов</h3>
            <div className="reviews-slider">
              <div className="review-card">
                <div className="review-rating">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="review-text">"{reviews[currentReview].text}"</p>
                <div className="review-author">
                  <strong>{reviews[currentReview].name}</strong>
                  <span>{reviews[currentReview].company}</span>
                </div>
              </div>
              
              <div className="slider-controls">
                <button className="slider-btn" onClick={prevReview}>‹</button>
                <div className="slider-dots">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentReview ? 'active' : ''}`}
                      onClick={() => setCurrentReview(index)}
                    />
                  ))}
                </div>
                <button className="slider-btn" onClick={nextReview}>›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}