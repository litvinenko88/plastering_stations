# 📁 Папка компонентов

## Как создать компонент:

### 1. Создайте файл компонента
```javascript
// src/components/Button.js
export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
      {text}
    </button>
  )
}
```

### 2. Импортируйте в page.js
```javascript
// src/app/page.js
import Button from '../components/Button'

export default function Home() {
  return (
    <div>
      <Button text="Нажми меня" onClick={() => alert('Привет!')} />
    </div>
  )
}
```

## Примеры компонентов:
- `Header.js` - шапка сайта
- `Footer.js` - подвал сайта  
- `Button.js` - кнопка
- `Card.js` - карточка
- `Modal.js` - модальное окно