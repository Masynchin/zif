"""Модель комментария в БД."""

import datetime as dt

from peewee import (
    CharField,
    DateTimeField,
    ForeignKeyField,
    Model,
    TextField,
)

from api.db import db


class BaseModel(Model):
    """Базовый класс моделей, содержащий общую метадату."""

    class Meta:
        """Общая метадата моделей.

        Все наши модели работают с одной БД, которая должна быть указана
        в метадате.
        """

        database = db


class Comment(BaseModel):
    """Модель комментария."""

    content = TextField()
    timestamp = DateTimeField(default=dt.datetime.now)
    topic = CharField(max_length=8, null=True)

    parent = ForeignKeyField("self", null=True)
