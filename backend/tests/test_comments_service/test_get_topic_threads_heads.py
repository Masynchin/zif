from api.services import comment_service


def test_get_topic_threads_heads():
    comment_service.create_comment(content="", parent_id=None, topic="it")
    comment_service.create_comment(content="", parent_id=None, topic="it")
    comment_service.create_comment(content="", parent_id=None, topic="it")

    heads = comment_service.get_topic_threads_heads(topic="it")
    for head in heads:
        assert head.topic == "it"
        assert head.parent_id is None


def test_exact_thread_topic():
    comment_service.create_comment(content="", parent_id=None, topic="it")
    comment_service.create_comment(content="", parent_id=None, topic="watch")
    comment_service.create_comment(
        content="", parent_id=None, topic="politics"
    )

    heads = comment_service.get_topic_threads_heads(topic="it")
    assert len(heads) == 1
    assert heads[0].topic == "it"


def test_no_children():
    comment_service.create_comment(content="head", parent_id=None, topic="it")
    comment_service.create_comment(content="child", parent_id=1, topic="it")
    comment_service.create_comment(content="child", parent_id=2, topic="it")

    heads = comment_service.get_topic_threads_heads(topic="it")
    assert len(heads) == 1
    assert heads[0].content == "head"
