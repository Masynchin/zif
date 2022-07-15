"""Роутер со всеми путями."""

from fastapi.routing import APIRouter

from api.routes.threads import router as threads_router
from api.routes.static import SPAStaticFiles  # noqa: F401


router = APIRouter(prefix="/api")
router.include_router(threads_router)
