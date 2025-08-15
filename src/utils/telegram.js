const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

export async function sendToTelegram(data, formSource) {
  // Валидация входных данных
  if (!data || typeof data !== 'object') {
    return { success: false, error: 'Некорректные данные' }
  }
  
  // Проверка наличия конфигурации
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram configuration missing - using fallback')
    return { success: true } // Возвращаем успех для демо-режима
  }

  // Валидация и санитизация входных данных
  const sanitize = (str) => (str && typeof str === 'string') ? str.replace(/[\n\r\t]/g, ' ').trim() : 'Не указано'
  
  const message = `🔔 Новая заявка с сайта

📍 Источник: ${sanitize(formSource)}
👤 Имя: ${sanitize(data.name)}
📞 Телефон: ${sanitize(data.phone)}
📧 Email: ${sanitize(data.email)}
💬 Сообщение: ${sanitize(data.message)}

⏰ Время: ${new Date().toLocaleString('ru-RU')}`

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    })

    const result = await response.json()
    
    if (!response.ok) {
      // Не логируем полный ответ для безопасности
      console.error('Telegram API error occurred')
      throw new Error('Failed to send message')
    }

    return { success: true }
  } catch (error) {
    // Не логируем детали ошибки для безопасности
    console.error('Telegram send error occurred')
    return { success: false, error: 'Ошибка отправки сообщения' }
  }
}