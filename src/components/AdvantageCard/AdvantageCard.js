'use client'
import './AdvantageCard.css'

export default function AdvantageCard({ advantage, index }) {
  const getIconClass = (title) => {
    if (title.includes('Гарантия')) return 'warranty'
    if (title.includes('Обучение')) return 'training'
    if (title.includes('Доступность')) return 'parts'
    if (title.includes('Выгодные')) return 'price'
    if (title.includes('Ремонт')) return 'repair'
    return 'warranty'
  }

  return (
    <div className="advantage-card">
      <div className={`advantage-icon ${getIconClass(advantage.title)}`}></div>
      <h3 className="advantage-title">
        {advantage.title}
      </h3>
      <p className="advantage-text">
        {advantage.text}
      </p>
    </div>
  )
}