"""Модуль со схемами комментария на вход, выход и т.д."""

import datetime as dt
from enum import Enum
from typing import Any, Optional

import peewee
from pydantic import BaseModel as PydanticBaseModel
from pydantic.utils import GetterDict


class PeeweeGetterDict(GetterDict):
    """Хак для работы Peewee с Pydantic.

    https://fastapi.tiangolo.com/advanced/sql-databases-peewee/
    """

    def get(self, key: Any, default: Any = None):
        """Переопределяем метод `.get()` под специфику Peewee."""
        res = getattr(self._obj, key, default)
        if isinstance(res, peewee.ModelSelect):
            return list(res)
        return res


class BaseModel(PydanticBaseModel):
    """Базовый класс наших моделей."""

    class Config:
        """Базовая конфигурация для совместимости с Peewee."""

        orm_mode = True
        getter_dict = PeeweeGetterDict


class TopicEnum(str, Enum):
    """Все возможные темы обсуждений."""

    it = "it"
    watch = "watch"
    chaos = "chaos"
    politics = "politics"


class CommentCreate(BaseModel):
    """Схема данных для создания комментария."""

    content: str
    parent_id: Optional[int]
    topic: Optional[TopicEnum]


class CommentGet(BaseModel):
    """Схема данных возвращаемого комментария.

    - `parent_id` отсутствует у комментария-начала обсуждения.
    - `topic` отсутствует у комментариев-ответов.
    """

    id: int
    content: str
    timestamp: dt.datetime
    parent_id: Optional[int]
    topic: Optional[str]
