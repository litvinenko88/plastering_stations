// Утилита для корректных путей к ресурсам
export const getAssetPath = (path = '') => {
  // Валидация входного параметра
  if (typeof path !== 'string') {
    console.warn('getAssetPath: invalid path parameter type')
    return ''
  }
  
  const basePath = process.env.NODE_ENV === 'production' ? '/plastering_stations' : ''
  return `${basePath}${path}`
}