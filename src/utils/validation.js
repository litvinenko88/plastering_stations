// Единая система валидации для всех форм
export const validateForm = (data) => {
  const errors = {}
  
  // Валидация имени
  if (!data.name || !data.name.trim()) {
    errors.name = 'Имя обязательно для заполнения'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Имя должно содержать минимум 2 символа'
  } else if (data.name.trim().length > 20) {
    errors.name = 'Имя не должно превышать 20 символов'
  }
  
  // Валидация телефона
  if (!data.phone || !data.phone.trim()) {
    errors.phone = 'Телефон обязателен для заполнения'
  } else {
    const phoneRegex = /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
    const cleanPhone = data.phone.replace(/[\s\-\(\)]/g, '')
    if (!phoneRegex.test(data.phone) || cleanPhone.length < 10) {
      errors.phone = 'Введите корректный номер телефона'
    }
  }
  
  // Валидация согласия (если есть)
  if (data.hasOwnProperty('agreement') && !data.agreement) {
    errors.agreement = 'Необходимо согласие на обработку данных'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Форматирование телефона
export const formatPhone = (phone) => {
  if (!phone) return ''
  return phone.replace(/[^\d+]/g, '').slice(0, 13)
}

// Форматирование имени
export const formatName = (name) => {
  if (!name) return ''
  return name.slice(0, 20)
}

// Стандартные сообщения об успехе
export const getSuccessMessage = (formSource) => {
  const messages = {
    'consultation': '🎉 Отлично! Ваша заявка успешно отправлена. Наш менеджер свяжется с вами в течение 15 минут!',
    'contacts': '🎉 Спасибо за обращение! Ваша заявка принята. Мы свяжемся с вами в ближайшее время!',
    'floating': '🎉 Отлично! Ваша заявка принята. Наш менеджер свяжется с вами в течение 10 минут с выгодным предложением!',
    'quiz': '🎉 Спасибо! Мы получили ваши ответы и свяжемся с персональным предложением!',
    'product': '🎉 Заявка отправлена! Наш специалист свяжется с вами для консультации по выбранной модели!'
  }
  
  return messages[formSource] || '🎉 Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время!'
}