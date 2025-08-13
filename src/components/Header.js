import './Header.css'

export default function Header() {
  const navItems = [
    { name: 'Каталог', href: '#catalog' },
    { name: 'Подобрать', href: '#select' },
    { name: 'Преимущества', href: '#advantages' },
    { name: 'Контакты', href: '#contacts', isContact: true }
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Логотип */}
          <a href="#" className="logo">
            MIXON
          </a>

          {/* Навигация */}
          <nav className="nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className={`nav-link ${item.isContact ? 'contact' : ''}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Мобильное меню кнопка */}
          <button className="mobile-menu-btn">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}