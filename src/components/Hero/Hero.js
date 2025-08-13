import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Профессиональные штукатурные станции</h1>
            <h2>Увеличьте скорость работы в 3-5 раз</h2>
            <p>
              Производим профессиональные штукатурные станции для машинного нанесения растворов. 
              Наши аппараты обеспечивают механизированную штукатурку стен с высокой производительностью.
            </p>
            
            <div className="hero-features">
              <div className="hero-feature">Гарантия 2-3 года</div>
              <div className="hero-feature">Обучение работе</div>
              <div className="hero-feature">Доступные запчасти</div>
              <div className="hero-feature">Выгодные цены</div>
            </div>
            
            <div className="hero-cta">
              <a href="#catalog" className="hero-btn primary">
                Смотреть каталог
              </a>
              <a href="#quiz" className="hero-btn secondary">
                Подобрать станцию
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="certificates">
              <div className="certificate">🇪🇺 CE</div>
              <div className="certificate">🇷🇺 ГОСТ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}