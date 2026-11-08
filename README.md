# Свадебный сайт Тимофея и Ксении

Статический сайт-приглашение на 27 февраля 2027.

## Публикация на GitHub Pages

1. Все файлы лежат в корне ветки `main`.
2. Settings → Pages → Source: **Deploy from a branch**.
3. Branch: **main**, folder: **/(root)** → Save.
4. Через 1–2 минуты сайт откроется: https://kseniyastetsko15-code.github.io/Wedd/

## Что заменить перед публикацией

| Файл | Что | На что |
|---|---|---|
| `index.html` | `https://formspree.io/f/ВАШ_ID` | Реальный ID формы с https://formspree.io |
| `index.html` | `+375 XX XXX-XX-XX` | Реальный номер телефона |
| `index.html` | `https://placehold.co/...` | Реальное фото (`photo.jpg` в корне) |

## Структура

- `index.html` — разметка
- `style.css` — стили
- `script.js` — таймер и отправка формы
- `.nojekyll` — отключает Jekyll (не трогать)

