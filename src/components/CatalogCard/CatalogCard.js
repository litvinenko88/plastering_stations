'use client'
import './CatalogCard.css'

export default function CatalogCard({ item, index }) {
  return (
    <div className="catalog-card">
      <div className={`catalog-icon ${item.icon}`}>
        {item.icon === 'automation' && <div className="inner-dot"></div>}
      </div>
      <h3 className="catalog-title">
        {item.title}
      </h3>
      <p className="catalog-description">
        {item.description}
      </p>
    </div>
  )
}