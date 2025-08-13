// ГЛАВНАЯ СТРАНИЦА САЙТА
// Здесь импортируются и используются компоненты

// КАК ДОБАВИТЬ КОМПОНЕНТ:
// 1. Создайте файл в папке src/components/ (например: Header.js)
// 2. Импортируйте: import Header from '../components/Header'
// 3. Используйте в JSX: <Header />

// ПРИМЕР ИМПОРТА КОМПОНЕНТОВ:
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import Button from '../components/Button'

export default function Home() {
  return (
    <div>
      <h1>Plastering Stations</h1>
      
      {/* Здесь добавляйте ваши компоненты */}
      {/* <Header /> */}
      {/* <Button /> */}
      {/* <Footer /> */}
      
      <p>Проект готов к работе!</p>
    </div>
  )
}