from api.services import comment_service


def test_get_threads_heads():
    comment_service.create_comment(content="", parent_id=None, topic="it")
    comment_service.create_comment(content="", parent_id=None, topic="chaos")
    comment_service.create_comment(content="", parent_id=None, topic="watch")

    heads = comment_service.get_threads_heads()
    assert len(heads) == 3


def test_only_threads_heads():
    comment_service.create_comment(content="", parent_id=None, topic="it")
    comment_service.create_comment(content="", parent_id=1, topic="it")

    heads = comment_service.get_threads_heads()
    assert len(heads) == 1


def test_no_threads_heads():
    heads = comment_service.get_threads_heads()
    assert len(heads) == 0
