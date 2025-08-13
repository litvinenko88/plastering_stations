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
                  <th className="our-column">Наша модель MIXER20-4</th>
                  <th>Немецкая станция</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Мотор</td>
                  <td className="our-column">4–5.5 кВт</td>
                  <td>5.5 кВт</td>
                </tr>
                <tr>
                  <td>Шнековый насос</td>
                  <td className="our-column">Да</td>
                  <td>Да</td>
                </tr>
                <tr>
                  <td>Смесительная камера</td>
                  <td className="our-column">Резиновая, диаметр 110 мм</td>
                  <td>Резиновая, диаметр 110 мм</td>
                </tr>
                <tr>
                  <td>Подача раствора</td>
                  <td className="our-column">2–60 л/мин</td>
                  <td>2–60 л/мин</td>
                </tr>
                <tr>
                  <td>Дальность подачи</td>
                  <td className="our-column">До 50 м</td>
                  <td>До 50 м</td>
                </tr>
                <tr>
                  <td>Производительность</td>
                  <td className="our-column">20–35 л/мин</td>
                  <td>20–35 л/мин</td>
                </tr>
                <tr>
                  <td>Электропитание</td>
                  <td className="our-column">220/380 вольт</td>
                  <td>220/380 вольт</td>
                </tr>
                <tr>
                  <td>Вес</td>
                  <td className="our-column">162 кг</td>
                  <td>192 кг</td>
                </tr>
                <tr>
                  <td>Цена</td>
                  <td className="our-column price-cell">~490 000 ₽</td>
                  <td className="price-cell">~900 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="comparison-advantages">
          <h3>Почему наша станция выгоднее?</h3>
          <ul className="advantages-list">
            <li>Легче на 30 кг за счет удобства транспортировки</li>
            <li>Совместима с широким выбором штукатурных смесей</li>
            <li>Доступные запчасти для смесительного узла</li>
            <li>Экономия более 400 000 рублей при покупке</li>
          </ul>
        </div>
      </div>
    </section>
  )
}