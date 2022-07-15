from api.db.models import Comment


def create_thread(content: str, topic: str) -> Comment:
    """Создание обсуждения."""
    comment = Comment.create(content=content, topic=topic, parent_id=None)
    comment.save()
    return comment
