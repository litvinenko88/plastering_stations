'use client'
import { useState, useEffect } from 'react'
import './ScrollToTop.css'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
      ticking = false
    }
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(toggleVisibility)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Прокрутить вверх"
    >
      ↑
    </button>
  )
}