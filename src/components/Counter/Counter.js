'use client'
import { useState, useEffect } from 'react'
import './Counter.css'

export default function Counter() {
  const [salesCount, setSalesCount] = useState(147)
  const [actionDays, setActionDays] = useState(5)
  const [actionHours, setActionHours] = useState(14)
  const [actionMinutes, setActionMinutes] = useState(32)
  const [actionSeconds, setActionSeconds] = useState(45)

  useEffect(() => {
    // Счетчик продаж (увеличивается каждые 30 секунд)
    const salesInterval = setInterval(() => {
      setSalesCount(prev => prev + 1)
    }, 30000)

    // Обратный отсчет акции (каждую секунду)
    const actionInterval = setInterval(() => {
      setActionSeconds(prev => {
        if (prev > 0) return prev - 1
        
        setActionMinutes(prevMinutes => {
          if (prevMinutes > 0) return prevMinutes - 1
          
          setActionHours(prevHours => {
            if (prevHours > 0) return prevHours - 1
            
            setActionDays(prevDays => {
              if (prevDays > 0) return prevDays - 1
              return 7 // Перезапуск на 7 дней
            })
            return 23
          })
          return 59
        })
        return 59
      })
    }, 1000)

    return () => {
      clearInterval(salesInterval)
      clearInterval(actionInterval)
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
              {actionDays}д {actionHours.toString().padStart(2, '0')}:{actionMinutes.toString().padStart(2, '0')}:{actionSeconds.toString().padStart(2, '0')}
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