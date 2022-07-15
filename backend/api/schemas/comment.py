"""Модуль со схемами комментария на вход, выход и т.д."""

import datetime as dt
from typing import Optional

from api.schemas.base import BaseModel


class CommentCreate(BaseModel):
    """Схема данных для создания комментария."""

    content: str
    parent_id: int


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
