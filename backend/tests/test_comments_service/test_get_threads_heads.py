from api.schemas.comment import CommentCreate
from api.services import comment_service


def test_get_threads_heads():
    comments = [
        CommentCreate(content="", parent_id=None, topic="it"),
        CommentCreate(content="", parent_id=None, topic="chaos"),
        CommentCreate(content="", parent_id=None, topic="watch"),
    ]

    for comment in comments:
        comment_service.create_comment(comment)

    threads_heads = comment_service.get_threads_heads()
    assert len(threads_heads) == 3


def test_only_threads_heads():
    comments = [
        CommentCreate(content="", parent_id=None, topic="it"),
        CommentCreate(content="", parent_id=1, topic="it"),
    ]

    for comment in comments:
        comment_service.create_comment(comment)

    threads_heads = comment_service.get_threads_heads()
    assert len(threads_heads) == 1


def test_no_threads_heads():
    threads_heads = comment_service.get_threads_heads()
    assert len(threads_heads) == 0
