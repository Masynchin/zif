from api.services import comment_service, thread_service


def test_get_threads_heads():
    thread_service.create_thread(content="", topic="it")
    thread_service.create_thread(content="", topic="chaos")
    thread_service.create_thread(content="", topic="watch")

    heads = comment_service.get_threads_heads()
    assert len(heads) == 3


def test_only_threads_heads():
    thread_service.create_thread(content="", topic="it")
    comment_service.create_comment(content="", parent_id=1)

    heads = comment_service.get_threads_heads()
    assert len(heads) == 1


def test_no_threads_heads():
    heads = comment_service.get_threads_heads()
    assert len(heads) == 0
