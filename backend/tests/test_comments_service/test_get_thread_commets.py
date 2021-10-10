import pytest

from api import exceptions
from api.schemas.comment import CommentCreate
from api.services import comment_service


def test_get_thread_comments():
    comments = [
        CommentCreate(content="head", parent_id=None, topic="it"),
        CommentCreate(content="child", parent_id=1),
        CommentCreate(content="child", parent_id=2),
    ]

    for comment in comments:
        comment_service.create_comment(comment)

    thread_comments = comment_service.get_thread_comments(comment_id=1)
    assert len(thread_comments) == 3


def test_only_from_one_thread():
    comments = [
        CommentCreate(content="head", parent_id=None, topic="it"),
        CommentCreate(content="child", parent_id=1),
        CommentCreate(content="another head", parent_id=None, topic="it"),
        CommentCreate(content="another child", parent_id=3),
    ]

    for comment in comments:
        comment_service.create_comment(comment)

    thread_comments = comment_service.get_thread_comments(comment_id=1)
    assert len(thread_comments) == 2


def test_no_thread():
    with pytest.raises(exceptions.ThreadDoesNotExist):
        comment_service.get_thread_comments(comment_id=1)
