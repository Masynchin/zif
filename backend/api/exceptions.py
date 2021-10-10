"""Собственные исключения."""


class CommentParentDoesNotExist(Exception):
    """.
    Комментария с ID, переданном в `parent_id`
    при создании комментария не существует.
    """


class ThreadDoesNotExist(Exception):
    """Обсуждения с данным ID не существует."""
