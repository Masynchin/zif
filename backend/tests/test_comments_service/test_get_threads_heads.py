from api.schemas.comment import CommentCreate
from api.services import comment_service


def test_get_threads_heads():
    datas = [
        CommentCreate(content="", parent_id=None, topic="it"),
        CommentCreate(content="", parent_id=None, topic="chaos"),
        CommentCreate(content="", parent_id=None, topic="watch"),
    ]

    for data in datas:
        comment_service.create_comment(data)

    heads = comment_service.get_threads_heads()
    assert len(heads) == 3


def test_only_threads_heads():
    datas = [
        CommentCreate(content="", parent_id=None, topic="it"),
        CommentCreate(content="", parent_id=1, topic="it"),
    ]

    for data in datas:
        comment_service.create_comment(data)

    heads = comment_service.get_threads_heads()
    assert len(heads) == 1


def test_no_threads_heads():
    heads = comment_service.get_threads_heads()
    assert len(heads) == 0
