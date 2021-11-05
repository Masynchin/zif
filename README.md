# zif

## Предназначение

Этот проект я создал для изучения React.

## Что это такое?

Это - форум, маленькая версия Двача.

## Структура

- Фронт - React
- Бэк - FastAPI

## Запуск

Для запуска в разработке:

- Фронт - `npm run start`
- Бэк - `uvicorn --factory main:create_app`

Для запуска в продакшене:

- Фронт - `npm run build`
- Бэк - Указать переменную окружения `stage=prod`
`uvicorn --factory main:create_app`
