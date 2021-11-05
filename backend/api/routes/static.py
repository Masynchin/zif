"""Роутер для статики."""

import os
from typing import Tuple

from fastapi.staticfiles import StaticFiles


class SPAStaticFiles(StaticFiles):
    """Обработка запросов статики.

    Обработка статики, созданной фронтом.
    Код взят отсюда: https://stackoverflow.com/a/68843198.
    """

    def __init__(self, directory: os.PathLike, index="index.html") -> None:
        self.index = index
        super().__init__(
            directory=directory, packages=None, html=True, check_dir=True
        )

    async def lookup_path(self, path: str) -> Tuple[str, os.stat_result]:
        """.
        Перегрузка метода `.lookup_path()` для выдачи index.html,
        если не удалось найти запрашиваемый файл.
        """
        full_path, stat_result = await super().lookup_path(path)
        if stat_result is None:
            return await super().lookup_path(self.index)

        return (full_path, stat_result)
