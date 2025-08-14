'use client'
import { useEffect, useState } from 'react'
import './ProductModal.css'
import OrderModal from '../OrderModal/OrderModal'

const productDetails = {
  1: {
    images: [
      '/images/products/Persona 220_380_1 (1).webp'
    ],
    features: [
      'Приготовление и нанесение гипсовых и цементных штукатурок',
      'Устройство наливных полов и цементных стяжек',
      'Приготовление кладочных растворов и строительных клеев',
      'Заполнение трещин и пустот в строительных конструкциях'
    ],
    efficiency: [
      'Штукатурные работы с гипсовыми смесями: 130-200 м²',
      'Штукатурные работы с цементными смесями: 150-200 м²',
      'Устройство наливных полов: 500 м²',
      'Устройство цементно-песчаных стяжек: 300 м²'
    ],
    specs: [
      'Шнековая пара SD6-3 Slimline на 20 л/мин',
      'Мотор редуктор 4 кВт',
      'Частотный преобразователь Yaskawa 4 кВт',
      'Растворный рукав 10 м',
      'Компрессор мембранный 200 л/мин (1,5 кВт)',
      'Встроенная насосная станция Pedrollo 550 Вт'
    ],
    advantages: [
      'Работа от 220V и 380V',
      'Удобная разборная конструкция',
      'Съемная резиновая смесительная камера',
      'Звуковое оповещение ошибок',
      'Защита от сухого хода'
    ]
  },
  2: {
    images: [
      '/images/products/Persona V380_2.jpg'
    ],
    features: [
      'Приготовление и нанесение гипсовых и цементных штукатурок',
      'Устройство наливных полов и цементных стяжек',
      'Приготовление кладочных растворов и строительных клеев'
    ],
    efficiency: [
      'Штукатурные работы с гипсовыми смесями: 130-200 м²',
      'Штукатурные работы с цементными смесями: 150-200 м²',
      'Устройство наливных полов: 500 м²',
      'Устройство цементно-песчаных стяжек: 300 м²'
    ],
    specs: [
      'Производительность: 15-35 л/мин',
      'Давление подачи: до 30 бар',
      'Дальность подачи: до 30 м',
      'Мотор насоса: 5,5 кВт, 400 об/мин',
      'Компрессор: 1,1 кВт, до 6 бар',
      'Объем приемного бункера: 150 л'
    ],
    advantages: [
      'Высокая производительность',
      'Модульная конструкция',
      'Легкая транспортировка',
      'Работа с сухими смесями'
    ]
  },
  3: {
    images: [
      '/images/products/Persona V1_1.png'
    ],
    features: [
      'Компактная модель для небольших объектов',
      'Работа с гипсовыми и цементными смесями',
      'Оптимальное соотношение цены и качества'
    ],
    specs: [
      'Шнековая пара: PFT B4-2L',
      'Производительность: 4-14 л/мин, MAX 20 бар',
      'Электродвигатель: 2.2 кВт, 2800 об/мин',
      'Компрессор: 1,5 кВт',
      'Габариты: 87/55/161 см',
      'Объем бункера: 70 л'
    ],
    advantages: [
      'Компактные размеры',
      'Легкий вес 141,5 кг',
      'Простота в эксплуатации',
      'Доступная цена'
    ]
  },
  4: {
    images: [
      '/images/products/Persona V1_plus_1.png'
    ],
    features: [
      'Улучшенная модель базовой серии',
      'Повышенная производительность',
      'Надежность и долговечность'
    ],
    specs: [
      'Шнековая пара: PFT SD6-3 Slim',
      'Производительность: 10-20 л/мин, MAX 25 бар',
      'Электродвигатель: 2.2 кВт, 1400 об/мин',
      'Компрессор: 1,5 кВт',
      'Габариты: 90/55/166 см',
      'Объем бункера: 70 л'
    ],
    advantages: [
      'Улучшенная шнековая пара',
      'Повышенное давление до 25 бар',
      'Оптимизированный двигатель',
      'Премиум качество'
    ]
  }
}

export default function ProductModal({ product, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

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



  if (!isOpen || !product) return null

  const details = productDetails[product.id] || {}

  return (
    <>
      <div className="product-modal-overlay" onClick={onClose}>
        <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-gallery">
              <div className="gallery-main">
                <img 
                  src={details.images ? details.images[currentImageIndex] : product.image} 
                  alt={product.name}
                  onClick={() => setIsFullscreen(true)}
                />
              </div>
              {details.images && details.images.length > 1 && (
                <div className="gallery-thumbs">
                  {details.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className={index === currentImageIndex ? 'active' : ''}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="modal-info">
              <h2>{product.name}</h2>
              <div className="modal-price">{product.price}</div>
              <p>{product.description}</p>
            </div>
          </div>

          <div className="modal-sections">
            {details.features && (
              <div className="modal-section">
                <h3>Особенности</h3>
                <ul>
                  {details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.specs && (
              <div className="modal-section">
                <h3>Характеристики</h3>
                <ul>
                  {details.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.efficiency && (
              <div className="modal-section">
                <h3>Эффективность за смену</h3>
                <ul>
                  {details.efficiency.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.advantages && (
              <div className="modal-section">
                <h3>Преимущества</h3>
                <ul>
                  {details.advantages.map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button className="order-btn" onClick={() => setIsOrderModalOpen(true)}>
              Заказать {product.name}
            </button>
          </div>
        </div>
        
        {isFullscreen && (
          <div className="fullscreen-overlay" onClick={() => setIsFullscreen(false)}>
            <img 
              src={details.images ? details.images[currentImageIndex] : product.image}
              alt={product.name}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="fullscreen-close" onClick={() => setIsFullscreen(false)}>×</button>
          </div>
        )}
        </div>
      </div>
      
      <OrderModal 
        product={product}
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </>
  )
}