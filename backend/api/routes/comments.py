"""Пути, связанные с комментариями."""

from typing import List

from fastapi import APIRouter

from api.schemas.comment import CommentCreate, CommentGet
from api.services import comment_service


router = APIRouter(prefix="/comments")


@router.get("/{topic}", response_model=List[CommentGet])
async def handle_get_threads_heads(topic: str):
    """Получение начал обсуждений темы `topic`."""
    threads_heads = comment_service.get_threads_heads(topic)
    return tuple(threads_heads)


@router.get("/{topic}/{comment_id}", response_model=List[CommentGet])
async def handle_get_thread_comments(topic: str, comment_id: int):
    """.
    Получение всех комментариев обсуждения с
    начальным комментарием `comment_id`.
    """
    thread_comments = comment_service.get_thread_comments(comment_id)
    return tuple(thread_comments)


@router.post("/")
async def handle_create_topic_comment(comment: CommentCreate):
    """Создание комментария."""
    created_comment = comment_service.create_comment(comment)
    return created_comment
