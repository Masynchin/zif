"""Сервис для работы с комментариями."""

from peewee import IntegrityError as PeeweeIntegrityError

from api import exceptions
from api.db.models import Comment


def create_comment(content: str, parent_id: int) -> Comment:
    """Создание комментария."""
    try:
        comment = Comment.create(content=content, parent_id=parent_id)
        comment.save()
    except PeeweeIntegrityError:
        raise exceptions.CommentParentDoesNotExist()
    else:
        return comment
