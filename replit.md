# Myshop - Laboratoria Coffee

## Обзор
Верстка главной страницы интернет-магазина кофе. Desktop only. В будущем будет интегрировано с Битрикс.

## Структура проекта
```
/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css              # Главный файл + CSS-переменные
│   │   ├── normalize.css          # Normalize v8.0.1
│   │   ├── reset.css              # Кастомный reset
│   │   └── modules/
│   │       ├── components.css     # Переиспользуемые компоненты (btn, card, icon-link)
│   │       ├── header.css         # Стили шапки
│   │       ├── hero.css           # Стили hero-секции
│   │       ├── catalog.css        # Стили каталога товаров
│   │       └── footer.css         # Стили подвала
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
│   │   └── product.png            # Заглушка товара
│   └── video/
│       └── main-bg.mp4            # Видео-фон для hero
```

## CSS-переменные
Все переменные определены в `:root` в `style.css`:
- Шрифты: `--font-main`, `--font-accent`
- Цвета: `--color-primary`, `--color-accent`, `--color-bg-light`, `--color-bg-white`, `--color-bg-dark`, `--color-placeholder`
- Размеры: `--container-width`, `--container-padding`, `--section-padding`, `--icon-size`, `--icon-size-sm`
- Скругления: `--radius-sm` (0.6rem), `--radius-md` (1.2rem)
- Анимации: `--transition-fast`, `--transition-smooth`

## Адаптивная типографика
- Base: `font-size: calc(100vw / 1920 * 10)` — 10px на 1920px
- 2560px+: `13.33px`
- 768px-: `10px`

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
- [x] Catalog (фильтры, сортировка, grid 4 колонки, карточки товаров)

## SVG-спрайт иконок
- `icon-logo-composite` — логотип с outline-эффектом на ховер
- `icon-search`, `icon-cart`, `icon-favorite`, `icon-user` — иконки шапки
- `icon-arrow-right` — стрелка для кнопок (1.2rem)
- `icon-filter` — иконка фильтров
- `icon-chevron-down` — стрелка вниз для dropdown
- `icon-sort` — иконка сортировки
- `icon-plus` — плюс для "Показать больше"

## История изменений
- 2025-12-27: Добавлена секция каталога с фильтрами, сортировкой и карточками товаров
- 2025-12-27: Header изменён на fixed (поверх контента)
- 2025-12-27: Рефакторинг — вынесены переиспользуемые компоненты в components.css
- 2025-12-27: Hero-секция: отступы 90px, горизонтальная анимация карточек, пропорция 16:9
- 2025-12-27: Все ховеры используют акцентный цвет #5088A5
