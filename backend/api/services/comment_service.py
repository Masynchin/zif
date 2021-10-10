"""Сервис для работы с комментариями."""

from typing import List

from peewee import IntegrityError as PeeweeIntegrityError

from api import exceptions
from api.db.models import Comment
from api.schemas.comment import CommentCreate


def create_comment(comment_data: CommentCreate) -> Comment:
    """Создание комментария."""
    try:
        comment = Comment.create(**comment_data.dict())
        comment.save()
    except PeeweeIntegrityError:
        raise exceptions.CommentParentDoesNotExist()
    else:
        return comment


def get_threads_heads(topic: str) -> List[Comment]:
    """Получение начальных комментариев обсуждений."""
    threads_heads = Comment.select().where(
        Comment.topic == topic, Comment.parent.is_null()
    )
    return threads_heads


def get_thread_comments(comment_id: int) -> List[Comment]:
    """Получение всех комментариев обсуждения."""
    # Пример взят с
    # http://docs.peewee-orm.com/en/latest/peewee/querying.html#recursive-ctes
    # Там же показан способ, как сделать в виде иерархии с уровнями

    Base = Comment.alias()  # noqa: N806

    parent = (
        Base.select(
            Base.id,
            Base.parent,
            Base.content,
            Base.timestamp,
        )
        .where(Base.parent.is_null(), Base.id == comment_id)
        .cte("base", recursive=True)
    )

    Replies = Comment.alias()  # noqa: N806

    replies = Replies.select(
        Replies.id,
        Replies.parent,
        Replies.content,
        Replies.timestamp,
    ).join(parent, on=(Replies.parent == parent.c.id))

    cte = parent.union(replies)

    thread_comments = cte.select_from(
        cte.c.id, cte.c.parent_id, cte.c.content, cte.c.timestamp
    ).order_by(cte.c.timestamp)

    if not thread_comments:
        raise exceptions.ThreadDoesNotExist()

    return thread_comments
