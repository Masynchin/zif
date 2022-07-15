"""Пути, связанные с обсуждениями."""

from typing import List

from fastapi import APIRouter

from api.schemas.comment import CommentGet
from api.schemas.thread import TopicCreate
from api.services import thread_service
from api.schemas.thread import TopicCreate


router = APIRouter(prefix="/threads")


@router.get("/", response_model=List[CommentGet])
async def handle_get_threads_heads():
    """Получение начал обсуждений всех тем."""
    return tuple(thread_service.get_threads_heads())


@router.get("/{topic}", response_model=List[CommentGet])
async def handle_get_topic_threads_heads(topic: str):
    """Получение начал обсуждений темы `topic`."""
    return tuple(thread_service.get_topic_threads_heads(topic))


@router.get("/{topic}/{comment_id}", response_model=List[CommentGet])
async def handle_get_thread_comments(topic: str, comment_id: int):
    """.
    Получение всех комментариев обсуждения с
    начальным комментарием `comment_id`.
    """
    return tuple(thread_service.get_thread_comments(comment_id))


@router.post("/")
async def handle_create_topic_comment(starter: TopicCreate):
    """Создание комментария."""
    return thread_service.create_thread(starter.content, starter.topic)
