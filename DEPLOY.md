# Инструкция по деплою на GitHub Pages

## Автоматический деплой

1. Убедитесь, что ваш репозиторий называется `plastering_stations`
2. Запушьте код в ветку `main`
3. GitHub Actions автоматически соберет и задеплоит сайт

## Настройка GitHub Pages

1. Зайдите в настройки репозитория (Settings)
2. Перейдите в раздел "Pages" 
3. В разделе "Source" выберите "Deploy from a branch"
4. Выберите ветку `gh-pages` и папку `/ (root)`
5. Нажмите "Save"

## Ручной деплой

Если нужно задеплоить вручную:

```bash
# Соберите проект
npm run build

# Установите gh-pages (если не установлен)
npm install -g gh-pages

# Задеплойте
gh-pages -d out
```

## Проверка

После деплоя сайт будет доступен по адресу:
https://litvinenko88.github.io/plastering_stations/

## Важные файлы для деплоя

- `next.config.mjs` - настройки Next.js для GitHub Pages
- `.github/workflows/deploy.yml` - GitHub Actions для автоматического деплоя
- `public/.nojekyll` - файл для корректной работы GitHub Pages
- `src/utils/paths.js` - утилита для правильных путей к ресурсам