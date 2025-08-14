const TELEGRAM_BOT_TOKEN = '7578786473:AAHezi5Q5RI8M7WiZX7Tes9gQmCTkOvTJqQ'
const TELEGRAM_CHAT_ID = '682859146'

export async function sendToTelegram(data, formSource) {
  const message = `🔔 Новая заявка с сайта

📍 Источник: ${formSource}
👤 Имя: ${data.name || 'Не указано'}
📞 Телефон: ${data.phone || 'Не указан'}
📧 Email: ${data.email || 'Не указан'}
💬 Сообщение: ${data.message || 'Не указано'}

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
        text: message
      })
    })

    const result = await response.json()
    
    if (!response.ok) {
      console.error('Telegram API error:', result)
      throw new Error(result.description || 'Failed to send message')
    }

    return { success: true }
  } catch (error) {
    console.error('Telegram send error:', error)
    return { success: false, error: error.message }
  }
}