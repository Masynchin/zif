"""Точка запуска приложения."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.db import setup_db
from api.routes import router


def create_app() -> FastAPI:
    """Инициализация приложения."""
    app = FastAPI()
    app.include_router(router)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    setup_db()

    return app
