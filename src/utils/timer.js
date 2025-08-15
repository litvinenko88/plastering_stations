// Глобальный таймер для синхронизации счетчиков
class GlobalTimer {
  constructor() {
    this.listeners = new Map() // Используем Map для лучшей производительности
    this.intervalId = null
    this.actionDays = 5
    this.actionHours = 14
    this.actionMinutes = 32
    this.actionSeconds = 45
    
    // Не запускаем таймер сразу - только когда есть подписчики
  }

  startTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
    
    this.intervalId = setInterval(() => {
      this.decrementTime()
      this.notifyListeners()
    }, 1000)
  }
  
  decrementTime() {
    if (--this.actionSeconds < 0) {
      this.actionSeconds = 59
      if (--this.actionMinutes < 0) {
        this.actionMinutes = 59
        if (--this.actionHours < 0) {
          this.actionHours = 23
          if (--this.actionDays < 0) {
            this.actionDays = 7
          }
        }
      }
    }
  }
  
  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  subscribe(callback) {
    const id = Symbol('timer-callback')
    this.listeners.set(id, callback)
    
    // Запускаем таймер при первой подписке
    if (this.listeners.size === 1) {
      this.startTimer()
    }
    
    // Отправляем текущее состояние
    callback({
      days: this.actionDays,
      hours: this.actionHours,
      minutes: this.actionMinutes,
      seconds: this.actionSeconds
    })
    
    return id
  }

  unsubscribe(callbackOrId) {
    if (typeof callbackOrId === 'symbol') {
      this.listeners.delete(callbackOrId)
    } else {
      // Обратная совместимость
      for (const [id, callback] of this.listeners) {
        if (callback === callbackOrId) {
          this.listeners.delete(id)
          break
        }
      }
    }
    
    // Останавливаем таймер если нет подписчиков
    if (this.listeners.size === 0) {
      this.stopTimer()
    }
  }

  notifyListeners() {
    const time = {
      days: this.actionDays,
      hours: this.actionHours,
      minutes: this.actionMinutes,
      seconds: this.actionSeconds
    }
    
    for (const callback of this.listeners.values()) {
      try {
        callback(time)
      } catch (error) {
        console.error('Timer callback error:', error)
      }
    }
  }
  
  destroy() {
    this.stopTimer()
    this.listeners.clear()
  }
}

export const globalTimer = new GlobalTimer()