"""Роутер со всеми путями."""

from fastapi.routing import APIRouter

from api.routes.comments import router as comments_router


router = APIRouter(prefix="/api")
router.include_router(comments_router)
