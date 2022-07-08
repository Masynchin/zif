"""Включатель БД для приложения и тестов."""

from peewee import SqliteDatabase


# pragmas={"foreign_keys": 1} гарантирует создание ограничений для первичных
# ключей в SQLite. В конце блока ссылки описываны причины для явного указания
# http://docs.peewee-orm.com/en/latest/peewee/relationships.html#creating-test-data
db = SqliteDatabase(
    ":memory:", check_same_thread=False, pragmas={"foreign_keys": 1}
)


def setup_db():
    """Инициализация БД для приложения."""
    from api.db.models import Comment

    db.connect()
    db.create_tables([Comment])


def setup_test_db():
    """Инициализация БД для тестов."""
    from api.db.models import Comment

    db.connect()
    db.create_tables([Comment])


def close_test_db():
    """Закрытие БД для тестов."""
    db.close()
