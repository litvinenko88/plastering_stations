'use client'
import { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Counter from '../components/Counter/Counter'
import FloatingContacts from '../components/FloatingContacts/FloatingContacts'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import AdvantageCard from '../components/AdvantageCard/AdvantageCard'
import CatalogCard from '../components/CatalogCard/CatalogCard'
import Notification from '../components/Notification/Notification'
import './about-styles.css'

import ProductCard from '../components/ProductCard/ProductCard'
import Comparison from '../components/Comparison/Comparison'
import FAQReviews from '../components/FAQReviews/FAQReviews'
import QuizModal from '../components/QuizModal/QuizModal'
import ComparisonModal from '../components/ComparisonModal/ComparisonModal'
import ProductModal from '../components/ProductModal/ProductModal'
import AboutVideo from '../components/AboutVideo/AboutVideo'
import { products } from '../data/products'

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isComparisonOpen, setIsComparisonOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [contactFormData, setContactFormData] = useState({ name: '', phone: '', agreement: false })
  const [contactNotification, setContactNotification] = useState({ show: false, message: '', type: 'success' })
  const [isContactSubmitting, setIsContactSubmitting] = useState(false)
  
  useEffect(() => {
    const handleOpenQuiz = () => setIsQuizOpen(true)
    window.addEventListener('openQuiz', handleOpenQuiz)
    return () => window.removeEventListener('openQuiz', handleOpenQuiz)
  }, [])

  const handleProductDetails = (product) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }

  const advantages = [
    {
      title: 'Гарантия 2 года + сервис',
      text: 'На все оборудование действует официальная гарантия. При необходимости мастер приедет на объект в течение 24 часов.'
    },
    {
      title: 'Обучение работе с оборудованием',
      text: 'Покажем, как правильно делать штукатурные работы с помощью станции — проведем инструктаж на объекте или онлайн.'
    },
    {
      title: 'Доступность запчастей',
      text: 'Расходники для шнекового насоса, смесительной камеры и других узлов всегда в наличии.'
    },
    {
      title: 'Выгодные цены',
      text: 'Предлагаем купить штукатурную машину с быстрой окупаемостью.'
    },
    {
      title: 'Ремонт и запчасти',
      text: 'Оригинальные комплектующие для ремонта шлангов, бункера и других элементов всегда в наличии.'
    }
  ]

  const catalogItems = [
    {
      icon: 'power',
      title: 'Штукатурные станции 220 вольт',
      description: 'компактные модели для небольших объектов.'
    },
    {
      icon: 'industrial',
      title: 'Профессиональные машины 380 вольт',
      description: 'для торкретирования и крупных фасадов.'
    },
    {
      icon: 'automation',
      title: 'Автоматические штукатурный агрегат',
      description: 'с регулировкой скорости подачи и высоким давлением для идеального нанесения.'
    }
  ]



  return (
    <>
      {/* Структурированные данные для SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NOVA",
            "legalName": "ООО НОВО",
            "description": "Производитель профессиональных штукатурных станций PERSONIYA",
            "url": "https://stations-nova.ru/",
            "logo": "https://stations-nova.ru/icon.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+7-996-417-90-01",
              "contactType": "customer service",
              "availableLanguage": "Russian",
              "areaServed": "RU"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "пр-кт Кулакова, д. 18, офис 116",
              "addressLocality": "Ставрополь",
              "postalCode": "355035",
              "addressRegion": "Ставропольский край",
              "addressCountry": "RU"
            },
            "foundingDate": "2021",
            "email": "mix-trades@mail.ru",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Каталог штукатурных станций PERSONIYA",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "PERSONIYA 220/380",
                    "description": "Универсальная штукатурная станция 220/380В",
                    "brand": "PERSONIYA",
                    "manufacturer": "NOVA"
                  },
                  "price": "650000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "PERSONIYA V380",
                    "description": "Промышленная штукатурная станция 380В",
                    "brand": "PERSONIYA",
                    "manufacturer": "NOVA"
                  },
                  "price": "535000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                }
              ]
            }
          })
        }}
      />

      <div>
        {/* Шапка с навигацией */}
        <Header />
        
        {/* Hero секция */}
        <Hero onQuizOpen={() => setIsQuizOpen(true)} />
        
        {/* Счетчики */}
        <Counter />
        
        {/* Основной контент */}
        <main>
          {/* Преимущества */}
          <section id="advantages" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
            <div className="container">
              <h2 style={{ 
                fontSize: 'var(--font-3xl)', 
                color: 'var(--color-primary)',
                textAlign: 'center',
                marginBottom: '3rem',
                fontWeight: 'bold'
              }}>
                Почему строители выбирают наши штукатурные станции?
              </h2>
              
              <div className="five-cards-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {advantages.map((advantage, index) => (
                  <AdvantageCard key={index} advantage={advantage} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Каталог превью */}
          <section id="catalog" style={{ 
            backgroundColor: 'var(--color-gray-light)', 
            padding: 'clamp(2rem, 5vw, 4rem) 0' 
          }}>
            <div className="container">
              <h2 style={{ 
                fontSize: 'var(--font-3xl)', 
                color: 'var(--color-primary)',
                textAlign: 'center',
                marginBottom: '2rem',
                fontWeight: 'bold'
              }}>
                Какое оборудование вы можете заказать?
              </h2>
              
              <div className="three-cards-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {catalogItems.map((item, index) => (
                  <CatalogCard key={index} item={item} index={index} />
                ))}
              </div>
              

            </div>
          </section>

          {/* Полный каталог товаров */}
          <section id="full-catalog" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
            <div className="container">
              <h2 style={{ 
                fontSize: 'var(--font-3xl)', 
                color: 'var(--color-primary)',
                textAlign: 'center',
                marginBottom: '3rem',
                fontWeight: 'bold'
              }}>
                Модели штукатурных станций
              </h2>
              
              <div className="products-grid">
                {products.map((product, index) => (
                  <ProductCard 
                    key={index} 
                    product={product} 
                    onDetailsClick={handleProductDetails}
                  />
                ))}
              </div>
              
              <div style={{ textAlign: 'center', marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
                <button 
                  onClick={() => setIsComparisonOpen(true)}
                  style={{
                    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                    background: 'var(--color-primary)',
                    color: 'var(--color-white)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: 'var(--font-lg)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: window.innerWidth <= 480 ? '100%' : 'auto',
                    maxWidth: '300px'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Сравнить модели
                </button>
              </div>
            </div>
          </section>

          {/* Сравнение с конкурентами */}
          <Comparison />

          {/* FAQ и Отзывы */}
          <FAQReviews />

          {/* О компании */}
          <section id="about" className="about-section" style={{ 
            padding: 'clamp(4rem, 8vw, 6rem) 0',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="container">
              <h2 style={{ 
                fontSize: 'var(--font-3xl)', 
                color: 'var(--color-primary)',
                textAlign: 'center',
                marginBottom: '3rem',
                fontWeight: 'bold'
              }}>
                О компании
              </h2>
              
              <div className="company-intro" style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                marginBottom: '3rem'
              }}>
                <div>
                  <p style={{ 
                    fontSize: 'var(--font-lg)', 
                    color: 'var(--color-gray-dark)',
                    lineHeight: '1.6'
                  }}>
                    Мы — производитель профессиональных штукатурных станций PERSONIYA с 10-летним опытом на рынке строительного оборудования. 
                    Наша миссия — сделать механизированную штукатурку доступной для мастеров, бригад и крупных строительных компаний, обеспечивая высокую производительность и качество работ.
                  </p>
                  <p style={{ 
                    fontSize: 'var(--font-base)', 
                    color: 'var(--color-gray)',
                    lineHeight: '1.6',
                    marginTop: '1rem'
                  }}>
                    Собственное производство в Ставрополе позволяет нам контролировать качество на всех этапах и предлагать конкурентные цены.
                  </p>
                </div>
                <AboutVideo />
              </div>
              
              <h3 style={{ 
                fontSize: 'var(--font-2xl)', 
                color: 'var(--color-primary)',
                textAlign: 'center',
                marginBottom: '2rem',
                fontWeight: 'bold'
              }}>
                Нас выбирают потому что:
              </h3>
              
              <div className="company-cards-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {[
                  {
                    title: 'Собственное производство в Ставрополе',
                    text: 'Полный контроль качества на всех этапах — от проектирования до сборки. Используем только проверенные комплектующие для долговечности оборудования.'
                  },
                  {
                    title: 'Широкий выбор штукатурных станций',
                    text: 'От компактных моделей на 220 В до промышленных агрегатов на бу. 380 В. В ассортименте — 12 моделей для любых задач:'
                  },
                  {
                    title: 'Гарантия до 3 лет',
                    text: 'Официальная гарантия на все оборудование + сервисная поддержка. В наличии всегда есть бункер. запчасти для ремонта: шнеки, смесительные камеры, шланги высокого давления.'
                  },
                  {
                    title: 'Обучение и поддержка',
                    text: 'Помогаем освоить технику механизированной штукатурки стен даже новичкам:'
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="feature-icon"></div>
                    <h4 style={{ 
                      fontSize: 'var(--font-lg)', 
                      color: 'var(--color-dark)',
                      marginBottom: '1rem',
                      marginTop: '1rem',
                      fontWeight: '600'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{ 
                      fontSize: 'var(--font-base)', 
                      color: 'var(--color-gray)',
                      lineHeight: '1.6'
                    }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="two-column-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center'
              }}>
                <div>
                  <h4 style={{ 
                    fontSize: 'var(--font-xl)', 
                    color: 'var(--color-primary)',
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    Наши клиенты:
                  </h4>
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {[
                      'Частные мастера',
                      'Строительные бригады', 
                      'Подрядные организации, которые могут оштукатуривать.',
                      'Производители сухих смесей, включая kaleta.'
                    ].map((client, index) => (
                      <li key={index} style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                        fontSize: 'var(--font-base)',
                        color: 'var(--color-dark)'
                      }}>
                        <div className="check-icon"></div>
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 style={{ 
                    fontSize: 'var(--font-xl)', 
                    color: 'var(--color-primary)',
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    Ценности:
                  </h4>
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {[
                      'Надежность — оборудование работает без сбоев даже при интенсивных нагрузках.',
                      'Инновации — внедряем современные технологии (например, регулировка скорости подачи раствора).',
                      'Экономия — наши станции сокращают расход материалов и время работ на 50%.'
                    ].map((value, index) => (
                      <li key={index} style={{ 
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                        fontSize: 'var(--font-base)',
                        color: 'var(--color-dark)',
                        lineHeight: '1.6'
                      }}>
                        <div className="check-icon" style={{ marginTop: '0.25rem' }}></div>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Контакты */}
          <section id="contacts" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
            <div className="container">
              <h2 style={{ 
                fontSize: 'var(--font-3xl)', 
                color: 'var(--color-primary)',
                textAlign: 'center',
                marginBottom: '3rem',
                fontWeight: 'bold'
              }}>
                Контакты
              </h2>
              
              <div className="contacts-grid" style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'start'
              }}>
                {/* Контактная информация */}
                <div>
                  <h3 style={{ 
                    fontSize: 'var(--font-2xl)', 
                    color: 'var(--color-primary)',
                    marginBottom: '2rem',
                    fontWeight: '600'
                  }}>
                    Контактная информация
                  </h3>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ 
                      fontSize: 'var(--font-lg)', 
                      color: 'var(--color-dark)',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      ООО «НОВО»
                    </h4>
                    
                    <div style={{ 
                      fontSize: 'var(--font-base)', 
                      color: 'var(--color-gray)',
                      lineHeight: '1.8'
                    }}>
                      <p><strong>Адрес:</strong> 355035, Ставропольский край, г. Ставрополь, пр-кт Кулакова, д. 18, офис 116</p>
                      <p><strong>Телефон:</strong> <a href="tel:+79964179001" style={{ color: 'var(--color-primary)' }}>+7 (996) 417-90-01</a></p>
                      <p><strong>Email:</strong> <a href="mailto:mix-trades@mail.ru" style={{ color: 'var(--color-primary)' }}>mix-trades@mail.ru</a></p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 style={{ 
                      fontSize: 'var(--font-lg)', 
                      color: 'var(--color-dark)',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      Реквизиты
                    </h4>
                    
                    <div style={{ 
                      fontSize: 'var(--font-sm)', 
                      color: 'var(--color-gray)',
                      lineHeight: '1.6'
                    }}>
                      <p>ИНН/КПП: 2635249770 / 263501001</p>
                      <p>ОГРН: 1212600007311</p>
                      <p>Расчетный счет: 40702810056010000233</p>
                      <p>Корреспондентский счет: 30101810000000000752</p>
                      <p>БИК банка: 040702752</p>
                      <p>Банк: Филиал «Ставропольский» АО «Альфа-банк»</p>
                    </div>
                  </div>
                </div>
                
                {/* Форма обратной связи */}
                <div className="contacts-form" style={{ 
                  padding: '2rem',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: '1rem',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  position: 'relative'
                }}>
                  {/* Уведомление формы */}
                  {contactNotification.show && (
                    <div style={{
                      position: 'absolute',
                      top: '-60px',
                      left: '0',
                      right: '0',
                      zIndex: 1000,
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      background: contactNotification.type === 'success' 
                        ? 'linear-gradient(135deg, #10b981, #059669)' 
                        : 'linear-gradient(135deg, #ef4444, #dc2626)',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      textAlign: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      animation: 'slideDown 0.3s ease-out'
                    }}>
                      {contactNotification.message}
                    </div>
                  )}
                  
                  <h3 style={{ 
                    fontSize: 'var(--font-xl)', 
                    color: 'var(--color-primary)',
                    marginBottom: '1.5rem',
                    fontWeight: '600'
                  }}>
                    Свяжитесь с нами
                  </h3>
                  
                  <form onSubmit={async (e) => {
                    e.preventDefault()
                    
                    if (!contactFormData.name.trim() || !contactFormData.phone.trim() || !contactFormData.agreement) {
                      setContactNotification({
                        show: true,
                        message: 'Пожалуйста, заполните все поля и дайте согласие на обработку данных',
                        type: 'error'
                      })
                      return
                    }
                    
                    setIsContactSubmitting(true)
                    
                    try {
                      const { sendToTelegram } = await import('../utils/telegram')
                      const result = await sendToTelegram(contactFormData, 'Форма контактов (Основная страница)')
                      
                      if (result.success) {
                        setContactNotification({
                          show: true,
                          message: '🎉 Отлично! Ваша заявка успешно отправлена. Мы свяжемся с вами в течение 15 минут!',
                          type: 'success'
                        })
                        setContactFormData({ name: '', phone: '', agreement: false })
                        // Автоматическое скрытие уведомления
                        setTimeout(() => {
                          setContactNotification(prev => ({ ...prev, show: false }))
                        }, 5000)
                      } else {
                        setContactNotification({
                          show: true,
                          message: '❌ Произошла ошибка при отправке. Попробуйте еще раз или позвоните нам.',
                          type: 'error'
                        })
                      }
                    } catch (error) {
                      setContactNotification({
                        show: true,
                        message: '❌ Ошибка соединения. Проверьте интернет и попробуйте снова.',
                        type: 'error'
                      })
                    } finally {
                      setIsContactSubmitting(false)
                    }
                  }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Ваше имя *"
                        value={contactFormData.name}
                        onChange={(e) => setContactFormData(prev => ({ ...prev, name: e.target.value.slice(0, 20) }))}
                        maxLength="20"
                        required
                        disabled={isContactSubmitting}
                        style={{
                          width: '100%',
                          padding: '1rem 1.25rem',
                          border: '2px solid #e2e8f0',
                          borderRadius: '0.75rem',
                          fontSize: 'var(--font-base)',
                          background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--color-primary)'
                          e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(125, 1, 11, 0.1), 0 4px 12px rgba(125, 1, 11, 0.15)'
                          e.target.style.transform = 'translateY(-1px)'
                          e.target.style.background = '#ffffff'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e2e8f0'
                          e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
                          e.target.style.transform = 'translateY(0)'
                          e.target.style.background = 'linear-gradient(145deg, #ffffff, #f8f9fa)'
                        }}
                      />
                    </div>
                    
                    <div>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="+7 (999) 123-45-67 *"
                        value={contactFormData.phone}
                        onChange={(e) => setContactFormData(prev => ({ ...prev, phone: e.target.value.replace(/[^+\d]/g, '').slice(0, 13) }))}
                        maxLength="13"
                        required
                        disabled={isContactSubmitting}
                        style={{
                          width: '100%',
                          padding: '1rem 1.25rem',
                          border: '2px solid #e2e8f0',
                          borderRadius: '0.75rem',
                          fontSize: 'var(--font-base)',
                          background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--color-primary)'
                          e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(125, 1, 11, 0.1), 0 4px 12px rgba(125, 1, 11, 0.15)'
                          e.target.style.transform = 'translateY(-1px)'
                          e.target.style.background = '#ffffff'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e2e8f0'
                          e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
                          e.target.style.transform = 'translateY(0)'
                          e.target.style.background = 'linear-gradient(145deg, #ffffff, #f8f9fa)'
                        }}
                      />
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '1rem',
                      background: 'linear-gradient(145deg, #f8f9fa, #e9ecef)',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid rgba(125, 1, 11, 0.1)'
                    }}>
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        checked={contactFormData.agreement}
                        onChange={(e) => setContactFormData(prev => ({ ...prev, agreement: e.target.checked }))}
                        disabled={isContactSubmitting}
                        style={{ 
                          width: '1.25rem',
                          height: '1.25rem',
                          accentColor: 'var(--color-primary)',
                          marginTop: '0'
                        }}
                        required
                      />
                      <label 
                        htmlFor="privacy" 
                        style={{ 
                          fontSize: 'var(--font-sm)', 
                          color: 'var(--color-gray)',
                          lineHeight: '1.4',
                          cursor: 'pointer'
                        }}
                      >
                        Я соглашаюсь на обработку персональных данных в соответствии с <a href="/privacy" style={{ color: 'var(--color-primary)' }}>политикой конфиденциальности</a> *
                      </label>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isContactSubmitting || !contactFormData.name.trim() || !contactFormData.phone.trim() || !contactFormData.agreement}
                      style={{
                        padding: '1rem 2.5rem',
                        background: isContactSubmitting || !contactFormData.name.trim() || !contactFormData.phone.trim() || !contactFormData.agreement 
                          ? 'linear-gradient(135deg, #9ca3af, #6b7280)' 
                          : 'linear-gradient(135deg, var(--color-primary), #8b0000)',
                        color: 'var(--color-white)',
                        border: 'none',
                        borderRadius: '0.75rem',
                        fontSize: 'var(--font-lg)',
                        fontWeight: '600',
                        cursor: isContactSubmitting || !contactFormData.name.trim() || !contactFormData.phone.trim() || !contactFormData.agreement ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: isContactSubmitting || !contactFormData.name.trim() || !contactFormData.phone.trim() || !contactFormData.agreement 
                          ? 'none' 
                          : '0 4px 15px rgba(125, 1, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        opacity: isContactSubmitting || !contactFormData.name.trim() || !contactFormData.phone.trim() || !contactFormData.agreement ? 0.6 : 1
                      }}
                      onMouseEnter={(e) => {
                        if (!isContactSubmitting && contactFormData.name.trim() && contactFormData.phone.trim() && contactFormData.agreement) {
                          e.target.style.transform = 'translateY(-2px) scale(1.02)'
                          e.target.style.boxShadow = '0 8px 25px rgba(125, 1, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isContactSubmitting && contactFormData.name.trim() && contactFormData.phone.trim() && contactFormData.agreement) {
                          e.target.style.transform = 'translateY(0) scale(1)'
                          e.target.style.boxShadow = '0 4px 15px rgba(125, 1, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                        }
                      }}
                    >
                      {isContactSubmitting ? (
                        <>
                          <span style={{ display: 'inline-block', marginRight: '0.5rem' }}>⏳</span>
                          Отправляем...
                        </>
                      ) : (
                        <>
                          <span style={{ display: 'inline-block', marginRight: '0.5rem' }}>📤</span>
                          Отправить заявку
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Футер */}
        <footer style={{ 
          backgroundColor: 'var(--color-dark)', 
          color: 'var(--color-secondary)',
          padding: 'clamp(2rem, 4vw, 3rem) 0 clamp(1rem, 2vw, 2rem)',
        }}>
          <div className="container">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <h3 style={{ 
                  fontSize: 'var(--font-xl)',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: 'var(--color-secondary)'
                }}>
                  NOVA
                </h3>
                <p style={{ 
                  fontSize: 'var(--font-sm)',
                  color: 'var(--color-gray)',
                  lineHeight: '1.6'
                }}>
                  Производитель профессиональных штукатурных станций с 10-летним опытом. 
                  Качество, надежность, инновации.
                </p>
              </div>
              
              <div>
                <h4 style={{ 
                  fontSize: 'var(--font-base)',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--color-secondary)'
                }}>
                  Навигация
                </h4>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    { name: 'Каталог', href: '#catalog' },
                    { name: 'Преимущества', href: '#advantages' },
                    { name: 'О компании', href: '#about' },
                    { name: 'Контакты', href: '#contacts' }
                  ].map((item, index) => (
                    <li key={index} style={{ 
                      marginBottom: '0.5rem'
                    }}>
                      <a href={item.href} style={{ 
                        color: 'var(--color-gray)',
                        textDecoration: 'none',
                        fontSize: 'var(--font-sm)',
                        transition: 'color 0.3s ease'
                      }}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 style={{ 
                  fontSize: 'var(--font-base)',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--color-secondary)'
                }}>
                  Контакты
                </h4>
                <div style={{ 
                  fontSize: 'var(--font-sm)',
                  color: 'var(--color-gray)',
                  lineHeight: '1.8'
                }}>
                  <div>📞 +7 (996) 417-90-01</div>
                  <div>📧 mix-trades@mail.ru</div>
                  <div>📍 г. Ставрополь</div>
                </div>
              </div>
            </div>
            
            <div style={{ 
              borderTop: '1px solid rgba(238, 232, 244, 0.2)',
              paddingTop: '2rem',
              textAlign: 'center'
            }}>
              <p style={{ 
                fontSize: 'var(--font-sm)',
                color: 'var(--color-gray)',
                marginBottom: '0.5rem'
              }}>
                © 2024 NOVA. Все права защищены. Штукатурные станции и оборудование для механизированной штукатурки.
              </p>
              <a 
                href="/privacy" 
                style={{ 
                  fontSize: 'var(--font-xs)',
                  color: 'var(--color-gray)',
                  textDecoration: 'none',
                  opacity: '0.7',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '1'}
                onMouseLeave={(e) => e.target.style.opacity = '0.7'}
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </footer>


        
        {/* Плавающие контакты */}
        <FloatingContacts />
        
        {/* Кнопка прокрутки вверх */}
        <ScrollToTop />
        
        {/* Модальное окно квиза */}
        <QuizModal 
          isOpen={isQuizOpen} 
          onClose={() => setIsQuizOpen(false)} 
        />
        
        {/* Модальное окно сравнения */}
        <ComparisonModal 
          isOpen={isComparisonOpen} 
          onClose={() => setIsComparisonOpen(false)} 
        />
        
        {/* Модальное окно товара */}
        <ProductModal 
          product={selectedProduct}
          isOpen={isProductModalOpen} 
          onClose={() => setIsProductModalOpen(false)} 
        />
      </div>
    </>
  )
}