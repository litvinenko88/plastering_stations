'use client'
import { useState } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Counter from '../components/Counter/Counter'
import FloatingContacts from '../components/FloatingContacts/FloatingContacts'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import AdvantageCard from '../components/AdvantageCard/AdvantageCard'
import CatalogCard from '../components/CatalogCard/CatalogCard'
import CatalogButton from '../components/CatalogButton/CatalogButton'
import ProductCard from '../components/ProductCard/ProductCard'
import Comparison from '../components/Comparison/Comparison'
import Reviews from '../components/Reviews/Reviews'
import FAQ from '../components/FAQ/FAQ'
import QuizModal from '../components/QuizModal/QuizModal'
import { products } from '../data/products'

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

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
      icon: '🔹',
      title: 'Штукатурные станции 220 вольт',
      description: 'компактные модели для небольших объектов, включая бу.'
    },
    {
      icon: '🔹',
      title: 'Профессиональные машины 380 вольт',
      description: 'для торкретирования и крупных фасадов.'
    },
    {
      icon: '🔹',
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
            "name": "MIXON",
            "description": "Производитель штукатурных станций и оборудования для механизированной штукатурки",
            "url": "https://mixon-plastering.ru",
            "logo": "https://mixon-plastering.ru/logo.png",
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
            "numberOfEmployees": "50-100"
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
              
              <div style={{ 
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
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {catalogItems.map((item, index) => (
                  <CatalogCard key={index} item={item} index={index} />
                ))}
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <CatalogButton />
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
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem'
              }}>
                {products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>
          </section>

          {/* Сравнение с конкурентами */}
          <Comparison />

          {/* Отзывы клиентов */}
          <Reviews />

          {/* FAQ */}
          <FAQ />

          {/* О компании */}
          <section id="about" style={{ 
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
              
              <div style={{ marginBottom: '3rem' }}>
                <p style={{ 
                  fontSize: 'var(--font-lg)', 
                  color: 'var(--color-gray-dark)',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  Мы — производитель профессиональных штукатурных станций m-tec. с 10-летним опытом на рынке строительного оборудования, включая бу. 
                  Наша миссия — сделать нанесения штукатурки стен доступной для мастеров, бригад и крупных строительных компаний, обеспечивая высокую производительность и качество работ.
                </p>
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
              
              <div style={{ 
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
                    <div style={{ 
                      fontSize: '2rem',
                      marginBottom: '1rem',
                      color: 'var(--color-primary)'
                    }}>
                      🔹
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
              
              <div style={{ 
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
                        <span style={{ color: 'var(--color-primary)' }}>✅</span>
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
                        <span style={{ color: 'var(--color-primary)', marginTop: '0.25rem' }}>✔</span>
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
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                textAlign: 'center'
              }}>
                <div style={{ 
                  padding: '2rem',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
                  <h3 style={{ 
                    fontSize: 'var(--font-xl)', 
                    color: 'var(--color-dark)',
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    Телефон
                  </h3>
                  <p style={{ 
                    fontSize: 'var(--font-lg)', 
                    color: 'var(--color-primary)',
                    fontWeight: '600'
                  }}>
                    +7 (800) 000-00-00
                  </p>
                </div>

                <div style={{ 
                  padding: '2rem',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
                  <h3 style={{ 
                    fontSize: 'var(--font-xl)', 
                    color: 'var(--color-dark)',
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    Email
                  </h3>
                  <p style={{ 
                    fontSize: 'var(--font-lg)', 
                    color: 'var(--color-primary)',
                    fontWeight: '600'
                  }}>
                    info@mixon-plastering.ru
                  </p>
                </div>

                <div style={{ 
                  padding: '2rem',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
                  <h3 style={{ 
                    fontSize: 'var(--font-xl)', 
                    color: 'var(--color-dark)',
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    Адрес
                  </h3>
                  <p style={{ 
                    fontSize: 'var(--font-base)', 
                    color: 'var(--color-gray)',
                    lineHeight: '1.6'
                  }}>
                    г. Ставрополь<br />
                    Производственная база
                  </p>
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
                  MIXON
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
                  Продукция
                </h4>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {['Станции 220В', 'Станции 380В', 'Запчасти', 'Аксессуары'].map((item, index) => (
                    <li key={index} style={{ 
                      marginBottom: '0.5rem'
                    }}>
                      <a href="#" style={{ 
                        color: 'var(--color-gray)',
                        textDecoration: 'none',
                        fontSize: 'var(--font-sm)',
                        transition: 'color 0.3s ease'
                      }}>
                        {item}
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
                  <div>📞 +7 (800) 000-00-00</div>
                  <div>📧 info@mixon-plastering.ru</div>
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
                © 2024 MIXON. Все права защищены. Штукатурные станции и оборудование для механизированной штукатурки.
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
      </div>
    </>
  )
}