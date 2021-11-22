# zif

## Предназначение

Этот проект я создал для изучения React.

## Что это такое?

Это - форум, маленькая версия Двача.

## Технологии

Фронт:
- [React](https://github.com/facebook/react) (через [create-react-app](https://github.com/facebook/create-react-app))
- [Redux](https://github.com/reduxjs/redux)
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)

Бэк:
- [FastAPI](https://github.com/tiangolo/fastapi) - веб-фреймворк
- [PeeWee](https://github.com/coleifer/peewee) - ORM

## Запуск

При разработке:

~~~sh
# /frontend
npm run start

# /backend
uvicorn --factory main:create_app
~~~

В продакшене (обслуживание собранного React-приложения с помощью FastAPI):

~~~sh
# /frontend
npm run build

# /backend
set stage=prod
uvicorn --factory main:create_app
~~~
