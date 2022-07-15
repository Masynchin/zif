"""Пути, связанные с комментариями."""

from typing import List

from fastapi import APIRouter

from api.schemas.comment import CommentCreate, CommentGet
from api.services import comment_service, thread_service


router = APIRouter(prefix="/comments")


@router.get("/", response_model=List[CommentGet])
async def handle_get_threads_heads():
    """Получение начал обсуждений всех тем."""
    heads = comment_service.get_threads_heads()
    return tuple(heads)


@router.get("/{topic}", response_model=List[CommentGet])
async def handle_get_topic_threads_heads(topic: str):
    """Получение начал обсуждений темы `topic`."""
    heads = comment_service.get_topic_threads_heads(topic)
    return tuple(heads)


@router.get("/{topic}/{comment_id}", response_model=List[CommentGet])
async def handle_get_thread_comments(topic: str, comment_id: int):
    """.
    Получение всех комментариев обсуждения с
    начальным комментарием `comment_id`.
    """
    comments = comment_service.get_thread_comments(comment_id)
    return tuple(comments)


@router.post("/")
async def handle_create_topic_comment(comment: CommentCreate):
    """Создание комментария."""
    comment = thread_service.create_thread(comment.content, comment.topic)
    return comment
