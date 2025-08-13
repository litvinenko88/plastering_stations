// ГЛАВНАЯ СТРАНИЦА САЙТА
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      {/* Шапка с логотипом и навигацией */}
      <Header />
      
      {/* Основной контент */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 style={{ fontSize: 'var(--font-3xl)', color: 'var(--color-primary)' }}>
          MIXON - Штукатурные станции
        </h1>
        <p style={{ fontSize: 'var(--font-lg)', color: 'var(--color-gray)' }}>
          Профессиональное оборудование для штукатурных работ
        </p>
      </main>
    </div>
  )
}