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
│   │       └── footer.css     # Стили подвала
│   ├── js/
│   │   ├── main.js            # Точка входа (ES modules)
│   │   └── modules/
│   │       └── header.js      # JS для шапки
│   └── img/
│       └── sprite.svg         # SVG-спрайт иконок
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
- [x] Header (шапка с hover-эффектом расширения)

## История изменений
- 2025-12-27: Рефакторинг CSS — вынесены переменные для transition и размеров иконок, удалены все комментарии
