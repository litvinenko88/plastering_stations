'use client'
import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.badge && (
        <div className={`product-badge ${product.badge.type}`}>
          {product.badge.text}
        </div>
      )}
      
      <h3 className="product-title">{product.name}</h3>
      
      <ul className="product-specs">
        <li>
          <span className="spec-label">Производительность:</span>
          <span className="spec-value">{product.productivity}</span>
        </li>
        <li>
          <span className="spec-label">Электропитание:</span>
          <span className="spec-value">{product.power}</span>
        </li>
        <li>
          <span className="spec-label">Вес:</span>
          <span className="spec-value">{product.weight}</span>
        </li>
        {product.distance && (
          <li>
            <span className="spec-label">Дальность подачи:</span>
            <span className="spec-value">{product.distance}</span>
          </li>
        )}
        {product.pressure && (
          <li>
            <span className="spec-label">Давление:</span>
            <span className="spec-value">{product.pressure}</span>
          </li>
        )}
        <li>
          <span className="spec-label">Гарантия:</span>
          <span className="spec-value">{product.warranty}</span>
        </li>
      </ul>
      
      <div className="product-price">от {product.price}</div>
      
      <p className="product-description">{product.description}</p>
      
      <div className="product-actions">
        <button className="product-btn primary">
          Заказать
        </button>
        <button className="product-btn secondary">
          Подробнее
        </button>
      </div>
    </div>
  )
}