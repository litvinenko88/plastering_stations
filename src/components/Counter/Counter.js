'use client'
import { useState, useEffect } from 'react'
import { globalTimer } from '../../utils/timer'
import './Counter.css'

export default function Counter() {
  const [salesCount, setSalesCount] = useState(147)
  const [timer, setTimer] = useState({
    days: 5,
    hours: 14,
    minutes: 32,
    seconds: 45
  })

  useEffect(() => {
    // Счетчик продаж (увеличивается каждые 30 секунд)
    const salesInterval = setInterval(() => {
      setSalesCount(prev => prev + 1)
    }, 30000)

    // Подписка на глобальный таймер
    const handleTimerUpdate = (time) => {
      setTimer(time)
    }

    globalTimer.subscribe(handleTimerUpdate)

    return () => {
      clearInterval(salesInterval)
      globalTimer.unsubscribe(handleTimerUpdate)
    }
  }, [])

  return (
    <section className="counters">
      <div className="counters-container">
        <div className="counters-text">
          <p>
            Производим профессиональные штукатурные станции для машинного нанесения растворов. 
            Наши аппараты обеспечивают механизированную штукатурку стен с высокой производительностью, 
            увеличивая скорость работы в 3-5 раз без потери качества. Мы предлагаем шнековые машины 
            и агрегаты для отделочных работ, которые идеально подходят для строительных объектов 
            любого масштаба — от частного ремонта до промышленных фасадов.
          </p>
        </div>
        
        <div className="counters-grid">
          <div className="counter-item">
            <span className="counter-number">{salesCount}</span>
            <div className="counter-label">
              Продано станций <br />
              <span className="counter-accent">в этом месяце</span>
            </div>
          </div>
          
          <div className="counter-item">
            <span className="counter-number">10+</span>
            <div className="counter-label">
              Лет на рынке <br />
              <span className="counter-accent">строительного оборудования</span>
            </div>
          </div>
          
          <div className="counter-item">
            <span className="counter-number">2-3</span>
            <div className="counter-label">
              Года гарантии <br />
              <span className="counter-accent">на все оборудование</span>
            </div>
          </div>
          
          <div className="counter-item">
            <span className="counter-number">
              {timer.days}д {timer.hours.toString().padStart(2, '0')}:{timer.minutes.toString().padStart(2, '0')}:{timer.seconds.toString().padStart(2, '0')}
            </span>
            <div className="counter-label">
              До окончания <br />
              <span className="counter-accent">специальной акции</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}