from api.schemas.comment import CommentCreate
from api.services import comment_service


def test_get_topic_threads_heads():
    datas = [
        CommentCreate(content="", parent_id=None, topic="it"),
        CommentCreate(content="", parent_id=None, topic="it"),
        CommentCreate(content="", parent_id=None, topic="it"),
    ]

    for data in datas:
        comment_service.create_comment(data)

    heads = comment_service.get_topic_threads_heads(topic="it")
    for head in heads:
        assert head.topic == "it"
        assert head.parent_id is None


def test_exact_thread_topic():
    datas = [
        CommentCreate(content="", parent_id=None, topic="it"),
        CommentCreate(content="", parent_id=None, topic="watch"),
        CommentCreate(content="", parent_id=None, topic="politics"),
    ]

    for data in datas:
        comment_service.create_comment(data)

    heads = comment_service.get_topic_threads_heads(topic="it")
    assert len(heads) == 1
    assert heads[0].topic == "it"


def test_no_children():
    datas = [
        CommentCreate(content="head", parent_id=None, topic="it"),
        CommentCreate(content="child", parent_id=1, topic="it"),
        CommentCreate(content="child", parent_id=2, topic="it"),
    ]

    for data in datas:
        comment_service.create_comment(data)

    heads = comment_service.get_topic_threads_heads(topic="it")
    assert len(heads) == 1
    assert heads[0].content == "head"
