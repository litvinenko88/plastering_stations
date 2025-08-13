'use client'

export default function AdvantageCard({ advantage, index }) {
  return (
    <div 
      key={index} 
      style={{ 
        padding: '2rem',
        backgroundColor: 'var(--color-white)',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: '1px solid var(--color-gray-light)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ 
        fontSize: '2rem',
        marginBottom: '1rem'
      }}>
        ✅
      </div>
      <h3 style={{ 
        fontSize: 'var(--font-xl)', 
        color: 'var(--color-dark)',
        marginBottom: '1rem',
        fontWeight: '600'
      }}>
        {advantage.title}
      </h3>
      <p style={{ 
        fontSize: 'var(--font-base)', 
        color: 'var(--color-gray)',
        lineHeight: '1.6'
      }}>
        {advantage.text}
      </p>
    </div>
  )
}