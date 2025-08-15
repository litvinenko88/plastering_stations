'use client'
import { useEffect } from 'react'
import './ComparisonModal.css'

export default function ComparisonModal({ isOpen, onClose }) {
  const comparisonData = [
    { label: 'Шнековая пара', p220: 'SD6-3 Slimline', v380: '-', v1: 'PFT B4-2L', v1plus: 'PFT SD6-3 Slim' },
    { label: 'Производительность', p220: '20 л/мин', v380: '15-35 л/мин', v1: '4-14 л/мин', v1plus: '10-20 л/мин' },
    { label: 'Электродвигатель', p220: '4 кВт', v380: '5.5 кВт, 400 об/мин', v1: '2.2 кВт, 2800 об/мин', v1plus: '2.2 кВт, 1400 об/мин' },
    { label: 'Компрессор', p220: '2-хцилиндровый 200 л/мин (1,5 кВт)', v380: '1,1 кВт, до 6 бар', v1: '1,5 кВт', v1plus: '1,5 кВт' },
    { label: 'Рукав', p220: '10 м', v380: '10 м', v1: '10 м', v1plus: '10 м' },
    { label: 'Габариты', p220: '-', v380: '-', v1: '87/55/161 см', v1plus: '90/55/166 см' },
    { label: 'Вес', p220: '-', v380: '260 кг', v1: '141,5 кг', v1plus: '149 кг' },
    { label: 'Объем бункера', p220: '-', v380: '150 л', v1: '70 л', v1plus: '70 л' },
    { label: 'Рабочее давление', p220: '-', v380: '-', v1: '2,5 бар', v1plus: '2,5 бар' },
    { label: 'Напряжение', p220: '220/380 V', v380: '380 V', v1: '230 V', v1plus: '230 V' },
    { label: 'Водяной насос', p220: '550 Вт', v380: '0.55 кВт', v1: '0.35 кВт', v1plus: '0.55 кВт' },
    { label: 'Давление подачи', p220: '-', v380: 'до 30 бар', v1: 'MAX 20 бар', v1plus: 'MAX 25 бар' },
    { label: 'Размер фракций', p220: '-', v380: '-', v1: 'MAX 3 мм', v1plus: 'MAX 3 мм' },
    { label: 'Дальность подачи', p220: '-', v380: 'до 30 м', v1: '20 м', v1plus: '20 м' },
    { label: 'Высота подачи', p220: '-', v380: '-', v1: '10 м', v1plus: '10 м' },
    { label: 'Производительность компрессора', p220: '200 л/мин', v380: '-', v1: '180 л/мин', v1plus: '180 л/мин' },
    { label: 'Цена', p220: 'от 650 000 ₽', v380: '535 000 ₽', v1: '408 000 ₽', v1plus: '428 000 ₽' }
  ]

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

  if (!isOpen) return null

  return (
    <div className="comparison-modal-overlay" onClick={onClose}>
      <div className="comparison-modal" onClick={(e) => e.stopPropagation()}>
        <button className="comparison-close" onClick={onClose}>
          ×
        </button>
        
        <h2 className="comparison-title">Сравнение характеристик станций</h2>
        
        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Характеристика</th>
                <th>PERSONIYA 220/380</th>
                <th>PERSONIYA V380</th>
                <th>PERSONIYA V-1</th>
                <th>PERSONIYA V-1 PLUS</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td className="comparison-label">{row.label}</td>
                  <td>{row.p220}</td>
                  <td>{row.v380}</td>
                  <td>{row.v1}</td>
                  <td>{row.v1plus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="mobile-comparison">
            <div className="mobile-model">
              <div className="mobile-model-header">PERSONIYA 220/380</div>
              {comparisonData.map((row, index) => (
                <div key={index} className="mobile-spec">
                  <div className="mobile-spec-label">{row.label}</div>
                  <div className="mobile-spec-value">{row.p220}</div>
                </div>
              ))}
            </div>
            
            <div className="mobile-model">
              <div className="mobile-model-header">PERSONIYA V380</div>
              {comparisonData.map((row, index) => (
                <div key={index} className="mobile-spec">
                  <div className="mobile-spec-label">{row.label}</div>
                  <div className="mobile-spec-value">{row.v380}</div>
                </div>
              ))}
            </div>
            
            <div className="mobile-model">
              <div className="mobile-model-header">PERSONIYA V-1</div>
              {comparisonData.map((row, index) => (
                <div key={index} className="mobile-spec">
                  <div className="mobile-spec-label">{row.label}</div>
                  <div className="mobile-spec-value">{row.v1}</div>
                </div>
              ))}
            </div>
            
            <div className="mobile-model">
              <div className="mobile-model-header">PERSONIYA V-1 PLUS</div>
              {comparisonData.map((row, index) => (
                <div key={index} className="mobile-spec">
                  <div className="mobile-spec-label">{row.label}</div>
                  <div className="mobile-spec-value">{row.v1plus}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}