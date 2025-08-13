import './Navigation.css'

export default function Navigation() {
  const menuItems = [
    { name: 'Главная', href: '#', active: true },
    { name: 'О компании', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Новости', href: '#news' }
  ]

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <ul className="navigation-list">
          {menuItems.map((item) => (
            <li key={item.name} className="navigation-item">
              <a 
                href={item.href}
                className={`navigation-link ${item.active ? 'active' : ''}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}