// Утилита для проверки поддержки видео
export const checkVideoSupport = () => {
  const video = document.createElement('video');
  return !!(video.canPlayType && video.canPlayType('video/mp4').replace(/no/, ''));
};

// Принудительное воспроизведение видео на мобильных
export const forceVideoPlay = (videoElement) => {
  if (videoElement && typeof videoElement.play === 'function') {
    const playPromise = videoElement.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Автовоспроизведение заблокировано:', error);
      });
    }
  }
};

// Проверка мобильного устройства
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};