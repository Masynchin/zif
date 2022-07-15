import pytest

from api import exceptions
from api.services import comment_service, thread_service


def test_create_reply_comment():
    thread = thread_service.create_thread(content="Thread content", topic="it")

    reply = comment_service.create_comment(
        content="Comment content", parent_id=thread.id
    )

    assert reply.content == "Comment content"
    assert reply.parent_id == thread.id


def test_reply_to_non_existed_comment():
    with pytest.raises(exceptions.CommentParentDoesNotExist):
        comment_service.create_comment(content="Comment content", parent_id=-1)
