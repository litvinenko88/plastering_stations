'use client'

export default function CatalogButton() {
  return (
    <a 
      href="#full-catalog" 
      style={{
        display: 'inline-block',
        padding: '1rem 2rem',
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
        textDecoration: 'none',
        borderRadius: '0.75rem',
        fontWeight: '600',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#6a0109'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-primary)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      Смотреть все модели
    </a>
  )
}