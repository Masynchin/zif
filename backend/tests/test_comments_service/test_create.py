import pytest

from api import exceptions
from api.schemas.comment import CommentCreate
from api.services import comment_service


def test_create_thread_starter_comment():
    comment_to_create = CommentCreate(
        content="Comment content",
        topic="it",
        parent_id=None,
    )
    created_comment = comment_service.create_comment(comment_to_create)

    assert created_comment.content == comment_to_create.content
    assert created_comment.topic == comment_to_create.topic
    assert created_comment.parent_id is None


def test_create_reply_comment():
    comment_to_reply = CommentCreate(content="Comment content", parent_id=None)
    comment_to_reply = comment_service.create_comment(comment_to_reply)

    reply_comment = CommentCreate(
        content="Comment content", parent_id=comment_to_reply.id
    )
    reply_comment = comment_service.create_comment(reply_comment)

    assert reply_comment.content == reply_comment.content
    assert reply_comment.parent_id == comment_to_reply.id


def test_reply_to_non_existed_comment():
    with pytest.raises(exceptions.CommentParentDoesNotExist):
        reply_comment = CommentCreate(content="Comment content", parent_id=-1)
        comment_service.create_comment(reply_comment)
