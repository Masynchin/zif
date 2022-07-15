from api.services import comment_service, thread_service


def test_get_topic_threads_heads():
    thread_service.create_thread(content="", topic="it")
    thread_service.create_thread(content="", topic="it")
    thread_service.create_thread(content="", topic="it")

    heads = thread_service.get_topic_threads_heads(topic="it")
    for head in heads:
        assert head.topic == "it"
        assert head.parent_id is None


def test_exact_thread_topic():
    thread_service.create_thread(content="", topic="it")
    thread_service.create_thread(content="", topic="watch")
    thread_service.create_thread(content="", topic="politics")

    heads = thread_service.get_topic_threads_heads(topic="it")
    assert len(heads) == 1
    assert heads[0].topic == "it"


def test_no_children():
    thread_service.create_thread(content="head", topic="it")
    comment_service.create_comment(content="child", parent_id=1)
    comment_service.create_comment(content="child", parent_id=2)

    heads = thread_service.get_topic_threads_heads(topic="it")
    assert len(heads) == 1
    assert heads[0].content == "head"
