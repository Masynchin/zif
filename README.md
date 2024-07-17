# zif

## О проекте

ZIF - это социальная сеть, форум.

Этот проект я создал для изучения фуллстек-приложений на Python (FastAPI) и React.

## Стек

Фронтенд:
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reduxjs/redux)
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)

Бэкенд:
- [FastAPI](https://github.com/tiangolo/fastapi) - веб-фреймворк
- [PeeWee](https://github.com/coleifer/peewee) - ORM

CI/CD:
- [GitHub Actions](https://github.com/features/actions) в CI для unit-тестов

Деплой:
- [Docker Compose](https://github.com/docker/compose)

## Запуск проекта

### Через Docker Compose

Запустите проект с помощью команды:

~~~sh
docker compose up --detach
~~~

После этого на `http://localhost:80` у вас открылась страница проекта.

### Вручную

Установите зависимости бэкенда и запустите сервер:
 
~~~sh
cd backend
pip install -r requirements.txt
uvicorn --factory main:create_app
~~~

Установите зависимости фронтенда и запустите:

~~~sh
cd frontend
npm install
npm run start
~~~

Фронтенд самостоятельно обрабатывает запросы к файлам фронтенда.
Бекэнд обрабатывает только запросы к API.
