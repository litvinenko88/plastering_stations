// Глобальный таймер для синхронизации счетчиков
class GlobalTimer {
  constructor() {
    this.listeners = []
    this.actionDays = 5
    this.actionHours = 14
    this.actionMinutes = 32
    this.actionSeconds = 45
    
    this.startTimer()
  }

  startTimer() {
    setInterval(() => {
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
      
      this.notifyListeners()
    }, 1000)
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
    
    this.listeners.forEach(callback => callback(time))
  }
}

export const globalTimer = new GlobalTimer()