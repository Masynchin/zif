import pytest

from api.db import close_test_db, setup_test_db


@pytest.fixture(autouse=True)
async def open_test_db():
    """Создание соединения к чистой тестовой ДБ для каждого теста."""
    await setup_test_db()
    yield
    await close_test_db()
