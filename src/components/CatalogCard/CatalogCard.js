'use client'

export default function CatalogCard({ item, index }) {
  return (
    <div 
      key={index} 
      style={{ 
        padding: '2rem',
        backgroundColor: 'var(--color-white)',
        borderRadius: '1rem',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div className={`catalog-icon ${item.icon}`} style={{ marginBottom: '1rem' }}>
      </div>
      <h3 style={{ 
        fontSize: 'var(--font-xl)', 
        color: 'var(--color-dark)',
        marginBottom: '1rem',
        fontWeight: '600'
      }}>
        {item.title}
      </h3>
      <p style={{ 
        fontSize: 'var(--font-base)', 
        color: 'var(--color-gray)'
      }}>
        {item.description}
      </p>
    </div>
  )
}