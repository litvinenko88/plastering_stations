import './Comparison.css'

export default function Comparison() {
  return (
    <section id="comparison" className="comparison">
      <div className="comparison-container">
        <h2 className="comparison-title">
          Сравнение с немецкими аналогами
        </h2>
        
        <div className="comparison-table">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Характеристика</th>
                  <th className="our-column">Наша модель PERSONIYA V380</th>
                  <th>Немецкая станция</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Мотор насоса</td>
                  <td className="our-column">5.5 кВт, 400 об/мин</td>
                  <td>5.5 кВт</td>
                </tr>
                <tr>
                  <td>Производительность</td>
                  <td className="our-column">15-35 л/мин</td>
                  <td>15-30 л/мин</td>
                </tr>
                <tr>
                  <td>Давление подачи</td>
                  <td className="our-column">до 30 бар</td>
                  <td>до 25 бар</td>
                </tr>
                <tr>
                  <td>Дальность подачи</td>
                  <td className="our-column">до 30 м</td>
                  <td>до 25 м</td>
                </tr>
                <tr>
                  <td>Компрессор</td>
                  <td className="our-column">1,1 кВт, до 6 бар</td>
                  <td>1,5 кВт, до 6 бар</td>
                </tr>
                <tr>
                  <td>Объем бункера</td>
                  <td className="our-column">150 л</td>
                  <td>120 л</td>
                </tr>
                <tr>
                  <td>Электропитание</td>
                  <td className="our-column">380 вольт</td>
                  <td>380 вольт</td>
                </tr>
                <tr>
                  <td>Вес</td>
                  <td className="our-column">260 кг</td>
                  <td>285 кг</td>
                </tr>
                <tr>
                  <td>Цена</td>
                  <td className="our-column price-cell">535 000 ₽</td>
                  <td className="price-cell">~950 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mobile-comparison">
          <div className="comparison-card our-model">
            <h3 className="card-title">🇷🇺 Наша модель PERSONIYA V380</h3>
            <div className="card-specs">
              <div className="spec-row">
                <span className="spec-label">Мотор насоса</span>
                <span className="spec-value">5.5 кВт, 400 об/мин</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Производительность</span>
                <span className="spec-value">15-35 л/мин</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Давление подачи</span>
                <span className="spec-value">до 30 бар</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Дальность подачи</span>
                <span className="spec-value">до 30 м</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Компрессор</span>
                <span className="spec-value">1,1 кВт, до 6 бар</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Объем бункера</span>
                <span className="spec-value">150 л</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Электропитание</span>
                <span className="spec-value">380 вольт</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Вес</span>
                <span className="spec-value">260 кг</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Цена</span>
                <span className="spec-value price">535 000 ₽</span>
              </div>
            </div>
          </div>
          
          <div className="comparison-card">
            <h3 className="card-title">🇩🇪 Немецкая станция</h3>
            <div className="card-specs">
              <div className="spec-row">
                <span className="spec-label">Мотор насоса</span>
                <span className="spec-value">5.5 кВт</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Производительность</span>
                <span className="spec-value">15-30 л/мин</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Давление подачи</span>
                <span className="spec-value">до 25 бар</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Дальность подачи</span>
                <span className="spec-value">до 25 м</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Компрессор</span>
                <span className="spec-value">1,5 кВт, до 6 бар</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Объем бункера</span>
                <span className="spec-value">120 л</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Электропитание</span>
                <span className="spec-value">380 вольт</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Вес</span>
                <span className="spec-value">285 кг</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Цена</span>
                <span className="spec-value price">~950 000 ₽</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="comparison-advantages">
          <h3>Почему наша станция выгоднее?</h3>
          <ul className="advantages-list">
            <li>
              <div className="advantage-icon weight"></div>
              <div className="advantage-text">Легче на 25 кг за счет оптимизации конструкции</div>
            </li>
            <li>
              <div className="advantage-icon volume"></div>
              <div className="advantage-text">Больший объем бункера (150 л против 120 л)</div>
            </li>
            <li>
              <div className="advantage-icon pressure"></div>
              <div className="advantage-text">Выше давление подачи (до 30 бар против 25)</div>
            </li>
            <li>
              <div className="advantage-icon money"></div>
              <div className="advantage-text">Экономия более 400 000 рублей при покупке</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}