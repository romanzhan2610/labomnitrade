# Myshop - Laboratoria Coffee

## Обзор
Верстка главной страницы интернет-магазина кофе. Desktop only. В будущем будет интегрировано с Битрикс.

## Структура проекта
```
/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css          # Главный файл + CSS-переменные
│   │   ├── normalize.css      # Normalize v8.0.1
│   │   ├── reset.css          # Кастомный reset
│   │   └── modules/
│   │       ├── header.css     # Стили шапки
│   │       ├── hero.css       # Стили hero-секции
│   │       └── footer.css     # Стили подвала
│   ├── js/
│   │   ├── main.js            # Точка входа (ES modules)
│   │   └── modules/
│   │       ├── header.js      # JS для шапки
│   │       └── hero.js        # JS для карусели карточек
│   ├── img/
│   │   └── sprite.svg         # SVG-спрайт иконок
│   └── video/
│       └── main-bg.mp4        # Видео-фон для hero (нужно добавить)
```

## CSS-переменные
Все переменные определены в `:root` в `style.css`:
- Шрифты: `--font-main`, `--font-accent`
- Цвета: `--color-primary`, `--color-accent`, `--color-bg-light`, `--color-bg-white`, `--color-placeholder`
- Размеры: `--container-width`, `--container-padding`, `--icon-size`, `--icon-size-sm`, `--radius-sm`
- Анимации: `--transition-fast`, `--transition-smooth`

## Адаптивная типографика
- Base: `font-size: calc(100vw / 1920 * 10)` — 10px на 1920px
- 2560px+: `13.33px`
- 768px-: `10px`

## Готовые компоненты
- [x] Header (шапка с hover-эффектом расширения, прозрачная поверх контента)
- [x] Hero-секция (видео-фон, заголовок, кнопка, карусель карточек)

## SVG-спрайт иконок
- `icon-logo-composite` — логотип с outline-эффектом на ховер
- `icon-search`, `icon-cart`, `icon-favorite`, `icon-user` — иконки шапки
- `icon-arrow-right` — стрелка для кнопок

## История изменений
- 2025-12-27: Добавлена hero-секция с видео-фоном и каруселью карточек
- 2025-12-27: Шапка теперь прозрачная, накладывается поверх hero-секции
- 2025-12-27: Рефакторинг CSS — вынесены переменные для transition и размеров иконок, удалены все комментарии
