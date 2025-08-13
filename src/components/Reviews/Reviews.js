import './Reviews.css'

export default function Reviews() {
  const reviews = [
    {
      name: 'Иван',
      role: 'строительная бригада (Москва)',
      avatar: 'И',
      text: 'Брали «Мастер-500» – за 2 месяца закрыли штукатуркой 3 новостройки. Оборудование не подвело ни разу! Высокая производительность',
      product: 'Станция "Мастер-500"'
    },
    {
      name: 'Ольга',
      role: 'частный мастер (Казань)',
      avatar: 'О',
      text: 'Использую «Компакт-150» для ремонтов – легкая, тихая, идеальна для квартир.',
      product: 'Станция "Компакт-150"'
    },
    {
      name: 'Компания «СтройГрад»',
      role: 'Екатеринбург',
      avatar: 'С',
      text: 'Купили штукатурную станцию «Турбо-600» для ЖК. Производительность – 60+ м²/час.',
      product: 'Станция "Турбо-600"'
    },
    {
      name: 'Александр',
      role: 'прораб (Краснодар)',
      avatar: 'А',
      text: '«Универсал-350» отлично справляется с цементными смесями. Рекомендую!',
      product: 'Станция "Универсал-350"'
    },
    {
      name: 'Дмитрий',
      role: 'частный застройщик (Ростов-на-Дону)',
      avatar: 'Д',
      text: '«Мини-100» – отличный вариант для небольшого ремонта. Цена и качество на уровне.',
      product: 'Станция "Мини-100"'
    },
    {
      name: 'Сергей',
      role: 'ИП (Воронеж)',
      avatar: 'С',
      text: '«Фасад-400» значительно ускорил работу на объекте. Доволен покупкой.',
      product: 'Станция "Фасад-400"'
    },
    {
      name: 'Анна',
      role: 'дизайнер (Сочи)',
      avatar: 'А',
      text: '«Премиум-450» – дорого, но оно того стоит. Идеальное качество нанесения на поверхности.',
      product: 'Станция "Премиум-450"'
    },
    {
      name: 'Михаил',
      role: 'строитель (Самара)',
      avatar: 'М',
      text: '«Экспресс-250» – золотая середина по цене и производительности, дефектов нет.',
      product: 'Станция "Экспресс-250"'
    }
  ]

  return (
    <section className="reviews">
      <div className="reviews-container">
        <h2 className="reviews-title">Отзывы клиентов</h2>
        
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-info">
                  <h4>{review.name}</h4>
                  <p className="review-role">{review.role}</p>
                </div>
              </div>
              
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffc107' }}>⭐</span>
                ))}
              </div>
              
              <p className="review-text">"{review.text}"</p>
              
              <div className="review-product">{review.product}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}