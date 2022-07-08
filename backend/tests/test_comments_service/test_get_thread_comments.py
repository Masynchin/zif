import pytest

from api import exceptions
from api.schemas.comment import CommentCreate
from api.services import comment_service


def test_get_thread_comments():
    datas = [
        CommentCreate(content="head", parent_id=None, topic="it"),
        CommentCreate(content="child", parent_id=1),
        CommentCreate(content="child", parent_id=2),
    ]

    for data in datas:
        comment_service.create_comment(data)

    comments = comment_service.get_thread_comments(comment_id=1)
    assert len(comments) == 3


def test_only_from_one_thread():
    datas = [
        CommentCreate(content="head", parent_id=None, topic="it"),
        CommentCreate(content="child", parent_id=1),
        CommentCreate(content="another head", parent_id=None, topic="it"),
        CommentCreate(content="another child", parent_id=3),
    ]

    for data in datas:
        comment_service.create_comment(data)

    comments = comment_service.get_thread_comments(comment_id=1)
    assert len(comments) == 2


def test_no_thread():
    with pytest.raises(exceptions.ThreadDoesNotExist):
        comment_service.get_thread_comments(comment_id=1)
