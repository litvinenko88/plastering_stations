// Глобальный таймер для синхронизации счетчиков
class GlobalTimer {
  constructor() {
    this.listeners = []
    this.intervalId = null
    this.actionDays = 5
    this.actionHours = 14
    this.actionMinutes = 32
    this.actionSeconds = 45
    
    this.startTimer()
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
    this.actionSeconds--
    
    if (this.actionSeconds < 0) {
      this.actionSeconds = 59
      this.actionMinutes--
      
      if (this.actionMinutes < 0) {
        this.actionMinutes = 59
        this.actionHours--
        
        if (this.actionHours < 0) {
          this.actionHours = 23
          this.actionDays--
          
          if (this.actionDays < 0) {
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
    this.listeners.push(callback)
    callback({
      days: this.actionDays,
      hours: this.actionHours,
      minutes: this.actionMinutes,
      seconds: this.actionSeconds
    })
  }

  unsubscribe(callback) {
    this.listeners = this.listeners.filter(listener => listener !== callback)
  }

  notifyListeners() {
    const time = {
      days: this.actionDays,
      hours: this.actionHours,
      minutes: this.actionMinutes,
      seconds: this.actionSeconds
    }
    
    this.listeners.forEach(callback => {
      try {
        callback(time)
      } catch (error) {
        console.error('Timer callback error:', error)
      }
    })
  }
  
  destroy() {
    this.stopTimer()
    this.listeners = []
  }
}

export const globalTimer = new GlobalTimer()