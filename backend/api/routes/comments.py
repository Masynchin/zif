"""Пути, связанные с комментариями."""

from fastapi import APIRouter

from api.schemas.comment import CommentCreate, CommentGet
from api.services import comment_service


router = APIRouter(prefix="/comments")


@router.post("/", response_model=CommentGet)
async def handle_create_reply_comment(reply: CommentCreate):
    """Создание комментария."""
    return comment_service.create_comment(reply.content, reply.parent_id)
