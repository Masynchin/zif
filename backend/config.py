"""Конфиг приложения."""

from enum import Enum

from pydantic import BaseSettings


class Stage(str, Enum):
    """Варианты среды запуска приложения."""

    dev = "dev"
    prod = "prod"

    def is_prod(self):
        """Происходит ли продуктовый запуск."""
        return self == Stage.prod


class Config(BaseSettings):
    """Конфиг приложения.

    Данные берутся из переменных окружения.
    """

    stage: Stage = Stage.dev
