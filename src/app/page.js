'use client'
import { useState } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Counter from '../components/Counter/Counter'
import FloatingContacts from '../components/FloatingContacts/FloatingContacts'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import AdvantageCard from '../components/AdvantageCard/AdvantageCard'
import CatalogCard from '../components/CatalogCard/CatalogCard'

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
            "description": "Производитель штукатурных станций и оборудования для механизированной штукатурки",
            "url": "https://nova-plastering.ru",
            "logo": "https://nova-plastering.ru/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+7-800-000-00-00",
              "contactType": "customer service",
              "availableLanguage": "Russian"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ставрополь",
              "addressCountry": "RU"
            },
            "foundingDate": "2014",
            "numberOfEmployees": "50-100",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Каталог штукатурных станций",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "PERSONIYA 220/380",
                    "description": "Универсальная штукатурная станция"
                  },
                  "price": "650000",
                  "priceCurrency": "RUB"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "PERSONIYA V380",
                    "description": "Промышленная штукатурная станция"
                  },
                  "price": "535000",
                  "priceCurrency": "RUB"
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
          <section id="advantages" style={{ padding: '4rem 0' }}>
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
            padding: '4rem 0' 
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
          <section id="full-catalog" style={{ padding: '4rem 0' }}>
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
              
              <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button 
                  onClick={() => setIsComparisonOpen(true)}
                  style={{
                    padding: '1rem 2rem',
                    background: 'var(--color-primary)',
                    color: 'var(--color-white)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: 'var(--font-lg)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
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
            padding: '4rem 0',
            backgroundColor: 'var(--color-secondary)'
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
                  <div key={index} style={{ 
                    padding: '2rem',
                    backgroundColor: 'var(--color-white)',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div className="feature-icon" style={{ 
                      marginBottom: '1rem'
                    }}>
                    </div>
                    <h4 style={{ 
                      fontSize: 'var(--font-lg)', 
                      color: 'var(--color-dark)',
                      marginBottom: '1rem',
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
                        gap: '0.5rem',
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
                        gap: '0.5rem',
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
          <section id="contacts" style={{ padding: '4rem 0' }}>
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
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{ 
                    fontSize: 'var(--font-xl)', 
                    color: 'var(--color-primary)',
                    marginBottom: '1.5rem',
                    fontWeight: '600'
                  }}>
                    Свяжитесь с нами
                  </h3>
                  
                  <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Ваше имя"
                        style={{
                          width: '100%',
                          padding: '1rem',
                          border: '2px solid var(--color-gray-200)',
                          borderRadius: '0.5rem',
                          fontSize: 'var(--font-base)',
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-200)'}
                      />
                    </div>
                    
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Ваш телефон"
                        style={{
                          width: '100%',
                          padding: '1rem',
                          border: '2px solid var(--color-gray-200)',
                          borderRadius: '0.5rem',
                          fontSize: 'var(--font-base)',
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-200)'}
                      />
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        style={{ marginTop: '0.25rem' }}
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
                        Согласен на обработку персональных данных
                      </label>
                    </div>
                    
                    <button 
                      type="submit"
                      style={{
                        padding: '1rem 2rem',
                        background: 'linear-gradient(135deg, var(--color-primary), #a00109)',
                        color: 'var(--color-white)',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontSize: 'var(--font-lg)',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                      onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                      Отправить
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
          padding: '3rem 0 2rem',
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
                color: 'var(--color-gray)'
              }}>
                © 2024 NOVA. Все права защищены. Штукатурные станции и оборудование для механизированной штукатурки.
              </p>
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