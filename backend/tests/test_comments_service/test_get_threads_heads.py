from api.schemas.comment import CommentCreate
from api.services import comment_service


def test_get_threads_heads():
    comments = [
        CommentCreate(content="", parent_id=None, topic="it"),
        CommentCreate(content="", parent_id=None, topic="it"),
        CommentCreate(content="", parent_id=None, topic="it"),
    ]

    for comment in comments:
        comment_service.create_comment(comment)

    threads_heads = comment_service.get_threads_heads(topic="it")
    for thread_head in threads_heads:
        assert thread_head.topic == "it"
        assert thread_head.parent_id is None


def test_exact_thread_topic():
    comments = [
        CommentCreate(content="", parent_id=None, topic="it"),
        CommentCreate(content="", parent_id=None, topic="watch"),
        CommentCreate(content="", parent_id=None, topic="politics"),
    ]

    for comment in comments:
        comment_service.create_comment(comment)

    threads_heads = comment_service.get_threads_heads(topic="it")
    assert len(threads_heads) == 1
    assert threads_heads[0].topic == "it"


def test_no_children():
    comments = [
        CommentCreate(content="head", parent_id=None, topic="it"),
        CommentCreate(content="child", parent_id=1, topic="it"),
        CommentCreate(content="child", parent_id=2, topic="it"),
    ]

    for comment in comments:
        comment_service.create_comment(comment)

    threads_heads = comment_service.get_threads_heads(topic="it")
    assert len(threads_heads) == 1
    assert threads_heads[0].content == "head"
