import pytest

from api import exceptions
from api.services import comment_service


def test_create_thread_starter_comment():
    comment = comment_service.create_comment(
        content="Comment content",
        topic="it",
        parent_id=None,
    )

    assert comment.content == "Comment content"
    assert comment.topic == "it"
    assert comment.parent_id is None


def test_create_reply_comment():
    comment = comment_service.create_comment(
        content="Comment content", parent_id=None
    )

    reply = comment_service.create_comment(
        content="Comment content", parent_id=comment.id
    )

    assert reply.content == "Comment content"
    assert reply.parent_id == comment.id


def test_reply_to_non_existed_comment():
    with pytest.raises(exceptions.CommentParentDoesNotExist):
        comment_service.create_comment(content="Comment content", parent_id=-1)
