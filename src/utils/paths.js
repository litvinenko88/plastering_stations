// Утилита для корректных путей к ресурсам
export const getAssetPath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/plastering_stations' : '';
  return `${basePath}${path}`;
};