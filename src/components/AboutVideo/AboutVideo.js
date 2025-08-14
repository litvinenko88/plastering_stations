'use client'
import { useEffect, useRef, useState } from 'react'

export default function AboutVideo() {
  const videoRef = useRef(null)
  const [userInteracted, setUserInteracted] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Обработчик для первого взаимодействия пользователя
    const handleUserInteraction = () => {
      setUserInteracted(true)
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('scroll', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }

    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('scroll', handleUserInteraction)
    document.addEventListener('keydown', handleUserInteraction)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            try {
              video.volume = 1.0
              await video.play()
            } catch (error) {
              // Если автозапуск заблокирован, показываем кнопку
              console.log('Автозапуск заблокирован браузером')
            }
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('scroll', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }
  }, [])

  return (
    <div style={{
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
    }}>
      <video 
        ref={videoRef}
        controls 
        preload="auto"
        playsInline
        style={{
          width: '100%',
          height: 'auto',
          display: 'block'
        }}

      >
        <source src="/videos/о компании.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  )
}