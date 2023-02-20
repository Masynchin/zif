# zif

## Предназначение

Этот проект я создал для изучения React.

## Что это такое?

Это - форум, маленькая версия Двача.

## Технологии

Фронт:
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reduxjs/redux)
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)

Бэк:
- [FastAPI](https://github.com/tiangolo/fastapi) - веб-фреймворк
- [PeeWee](https://github.com/coleifer/peewee) - ORM

## Работа с проектом

### Установка зависимостей

#### Бэкенд

Для запуска проекта:

~~~sh
cd backend
pip install -r requirements.txt
~~~

Для разработки (включает зависимости для запуска):

~~~sh
cd backend
pip install -r requirements-dev.txt
~~~

#### Фронтенд

~~~sh
cd frontend
npm install
~~~

### Переменные окружения

- `stage` - где запускается проект (`dev` - при разработке, `prod` - в продакшене)

### Запуск

#### При разработке

Фронтенд самостоятельно обрабатывает запросы к файлам фронтенда.
Бекэнд обрабатывает только запросы к API.

~~~sh
# /frontend
npm run start

# /backend
set stage=dev
uvicorn --factory main:create_app
~~~

#### В продакшене

Фронтенд компилирует статические файлы.
Бэкенд обрабатывает как запросы к API, так и запросы к файлам статики.

~~~sh
# /frontend
npm run build

# /backend
set stage=prod
uvicorn --factory main:create_app
~~~
