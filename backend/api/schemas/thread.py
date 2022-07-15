"""Модуль со схемами обсуждения на вход, выход и т.д."""

import datetime as dt
from enum import Enum
from typing import Optional

from api.schemas.base import BaseModel


class TopicEnum(str, Enum):
    """Все возможные темы обсуждений."""

    it = "it"
    watch = "watch"
    chaos = "chaos"
    politics = "politics"


class TopicCreate(BaseModel):
    """Схема данных для создания комментария."""

    content: str
    topic: TopicEnum
