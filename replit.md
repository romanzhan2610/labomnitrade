# Myshop - Laboratoria Coffee

## Обзор
Верстка главной страницы интернет-магазина кофе. Desktop only (1024px+). В будущем будет интегрировано с Битрикс.

## Структура проекта
```
/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css              # Главный файл + CSS-переменные + все импорты
│   │   ├── normalize.css          # Normalize v8.0.1
│   │   ├── reset.css              # Кастомный reset
│   │   └── modules/
│   │       ├── components.css     # Переиспользуемые компоненты (btn, card, icon-link)
│   │       ├── header.css         # Стили шапки
│   │       ├── hero.css           # Стили hero-секции
│   │       ├── catalog.css        # Стили каталога товаров
│   │       ├── about.css          # Стили секции "О нас"
│   │       ├── why.css            # Стили секции "Преимущества"
│   │       └── business.css       # Стили секции "Для бизнеса"
│   ├── js/
│   │   ├── main.js                # Точка входа (ES modules)
│   │   └── modules/
│   │       ├── header.js          # JS для шапки
│   │       └── hero.js            # JS для карусели карточек
│   ├── img/
│   │   ├── sprite.svg             # SVG-спрайт иконок
│   │   ├── main-card-1.jpg        # Карточка категории 1
│   │   ├── main-card-2.jpg        # Карточка категории 2
│   │   ├── main-card-3.jpg        # Карточка категории 3
│   │   ├── product.png            # Заглушка товара
│   │   ├── about.png              # Изображение секции "О нас"
│   │   ├── why.jpg                # Изображение секции "Преимущества"
│   │   └── business-bg.jpg        # Фон секции "Для бизнеса"
│   └── video/
│       └── main-bg.mp4            # Видео-фон для hero
```

## CSS-архитектура
Все стили импортируются через единый `style.css`:
```css
@import url("./normalize.css");
@import url("./reset.css");
@import url("./modules/components.css");
@import url("./modules/header.css");
@import url("./modules/hero.css");
@import url("./modules/catalog.css");
@import url("./modules/about.css");
@import url("./modules/why.css");
@import url("./modules/business.css");
```

## CSS-переменные
Все переменные определены в `:root` в `style.css`:
- Шрифты: `--font-main`, `--font-accent`
- Цвета: `--color-primary`, `--color-accent`, `--color-bg-light`, `--color-bg-white`, `--color-bg-dark`, `--color-placeholder`
- Размеры: `--container-width`, `--container-padding`, `--section-padding`, `--icon-size`, `--icon-size-sm`
- Скругления: `--radius-sm` (0.6rem), `--radius-md` (1.2rem)
- Анимации: `--transition-fast`, `--transition-smooth`

## Адаптивная типографика
- Base: `font-size: clamp(10px, 0.5208vw, 13.33px)` — фиксированный размер для 1024px+
- Экраны < 1024px: показывается заглушка "Адаптивная версия в разработке"

## Общие компоненты (style.css)
- `.section__label` — лейбл секции (серый, uppercase)
- `.section__title` — заголовок секции (Oswald 700, 7.8rem)
- `.section__title--white` — белый вариант заголовка
- `.section__title-accent` — акцентный цвет для части заголовка
- `.mobile-stub` — заглушка для мобильных устройств

## Компоненты (components.css)
- `.btn` — базовая кнопка
- `.btn--outline-light` — белая обводка для тёмного фона
- `.btn--outline-dark` — чёрная обводка для светлого фона
- `.card` — базовая карточка с белым фоном
- `.icon-link` — круглая ссылка с иконкой
- `.icon-link--arrow` — модификатор с поворотом стрелки

## Готовые секции
- [x] Header (fixed, фон #F6F6F6, hover-эффект расширения)
- [x] Hero (видео-фон, заголовок, кнопка, карусель с горизонтальной анимацией)
- [x] Catalog (фильтры, сортировка, grid 4 колонки, карточки товаров с hover-эффектами)
- [x] About (секция "О нас", grid 2 колонки, изображение + текст)
- [x] Why (секция "Преимущества", grid 3x2, квадратные карточки)
- [x] Business (секция "Для бизнеса", полноэкранный фон, текст слева снизу)

## SVG-спрайт иконок
- `icon-logo-composite` — логотип с outline-эффектом на ховер
- `icon-search`, `icon-cart`, `icon-favorite`, `icon-user` — иконки шапки
- `icon-arrow-right` — стрелка для кнопок (1.2rem)
- `icon-filter` — иконка фильтров
- `icon-chevron-down` — стрелка вниз для dropdown
- `icon-sort` — иконка сортировки
- `icon-plus` — плюс для "Показать больше"
- `icon-cart-filled` — заполненная корзина для карточек товаров

## История изменений
- 2025-12-27: Рефакторинг CSS-архитектуры, все импорты в style.css
- 2025-12-27: Добавлена заглушка для мобильных устройств (< 1024px)
- 2025-12-27: Фиксированная типографика clamp() для 1024px+
- 2025-12-27: Общие классы section__label, section__title
- 2025-12-27: Добавлена секция "Для бизнеса" с фоновым изображением
- 2025-12-27: Добавлена секция "Преимущества" с квадратными карточками
- 2025-12-27: Добавлена секция "О нас"
- 2025-12-27: Добавлена секция каталога с hover-эффектами карточек
