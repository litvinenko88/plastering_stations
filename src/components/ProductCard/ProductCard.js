'use client'
import './ProductCard.css'
import LazyImage from '../LazyImage/LazyImage'

export default function ProductCard({ product, onDetailsClick }) {
  return (
    <div className="product-card">
      {product.badge && (
        <div className={`product-badge ${product.badge.type}`}>
          {product.badge.text}
        </div>
      )}
      
      <div className="product-image">
        <LazyImage 
          src={product.image || '/images/products/placeholder.jpg'} 
          alt={product.name}
          width="300"
          height="200"
          onError={(e) => {
            e.target.src = '/images/products/placeholder.jpg'
          }}
        />
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
      
        <ul className="product-specs">
          <li>
            <span className="spec-label">Производительность:</span>
            <span className="spec-value">{product.productivity}</span>
          </li>
          <li>
            <span className="spec-label">Напряжение:</span>
            <span className="spec-value">{product.power}</span>
          </li>
          {product.motorPower && (
            <li>
              <span className="spec-label">Мощность:</span>
              <span className="spec-value">{product.motorPower}</span>
            </li>
          )}
          {product.weight && (
            <li>
              <span className="spec-label">Вес:</span>
              <span className="spec-value">{product.weight}</span>
            </li>
          )}
          {product.distance && (
            <li>
              <span className="spec-label">Дальность:</span>
              <span className="spec-value">{product.distance}</span>
            </li>
          )}
          {product.efficiency && (
            <li>
              <span className="spec-label">Эффективность:</span>
              <span className="spec-value">{product.efficiency}</span>
            </li>
          )}
        </ul>
        
        <div className="product-price">{product.price}</div>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-actions">
          <button 
            className="product-btn primary"
            onClick={() => onDetailsClick && onDetailsClick(product)}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  )
}