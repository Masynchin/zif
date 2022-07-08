import pytest

from api import exceptions
from api.schemas.comment import CommentCreate
from api.services import comment_service


def test_create_thread_starter_comment():
    data = CommentCreate(
        content="Comment content",
        topic="it",
        parent_id=None,
    )
    comment = comment_service.create_comment(data)

    assert comment.content == data.content
    assert comment.topic == data.topic
    assert comment.parent_id is None


def test_create_reply_comment():
    comment_data = CommentCreate(content="Comment content", parent_id=None)
    comment = comment_service.create_comment(comment_data)

    reply_data = CommentCreate(content="Comment content", parent_id=comment.id)
    reply = comment_service.create_comment(reply_data)

    assert reply.content == reply.content
    assert reply.parent_id == comment.id


def test_reply_to_non_existed_comment():
    with pytest.raises(exceptions.CommentParentDoesNotExist):
        data = CommentCreate(content="Comment content", parent_id=-1)
        comment_service.create_comment(data)
