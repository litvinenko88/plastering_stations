'use client'
import { useState } from 'react'

export default function AboutVideo() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div style={{
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      position: 'relative',
      paddingBottom: '56.25%', // 16:9 aspect ratio
      height: 0,
      backgroundColor: '#f5f5f5'
    }}>
      {hasError ? (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#666'
        }}>
          <p>Ошибка загрузки видео</p>
          <p>Попробуйте обновить страницу</p>
        </div>
      ) : (
        <>
          {!isLoaded && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#666'
            }}>
              Загрузка видео...
            </div>
          )}
          <iframe 
            src="https://rutube.ru/play/embed/47e9c5a9ee217119f65346f3990918a9/?skinColor=red"
            allow="clipboard-write; autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            title="О компании NOVA"
          />
        </>
      )}
    </div>
  )
}