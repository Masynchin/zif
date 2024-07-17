"""Базовая модель всех схем."""

from typing import Any

import peewee
from pydantic import ConfigDict, BaseModel as PydanticBaseModel
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

    model_config = ConfigDict(from_attributes=True, getter_dict=PeeweeGetterDict)
