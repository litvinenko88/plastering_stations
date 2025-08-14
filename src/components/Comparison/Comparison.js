import './Comparison.css'

export default function Comparison() {
  return (
    <section className="comparison">
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
        
        <div className="comparison-advantages">
          <h3>Почему наша станция выгоднее?</h3>
          <ul className="advantages-list">
            <li>Легче на 25 кг за счет оптимизации конструкции</li>
            <li>Больший объем бункера (150 л против 120 л)</li>
            <li>Выше давление подачи (до 30 бар против 25)</li>
            <li>Экономия более 400 000 рублей при покупке</li>
          </ul>
        </div>
      </div>
    </section>
  )
}