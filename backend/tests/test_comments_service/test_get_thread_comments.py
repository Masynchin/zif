import pytest

from api import exceptions
from api.services import comment_service, thread_service


def test_get_thread_comments():
    thread_service.create_thread(content="head", topic="it")
    comment_service.create_comment(content="child", parent_id=1)
    comment_service.create_comment(content="child", parent_id=2)

    comments = comment_service.get_thread_comments(comment_id=1)
    assert len(comments) == 3


def test_only_from_one_thread():
    thread_service.create_thread(content="head", topic="it")
    comment_service.create_comment(content="child", parent_id=1)
    comment_service.create_comment(content="another head", parent_id=None)
    comment_service.create_comment(content="another child", parent_id=3)

    comments = comment_service.get_thread_comments(comment_id=1)
    assert len(comments) == 2


def test_no_thread():
    with pytest.raises(exceptions.ThreadDoesNotExist):
        comment_service.get_thread_comments(comment_id=1)
