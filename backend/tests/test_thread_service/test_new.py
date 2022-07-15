from api.services import thread_service


def test_create_thread():
    thread = thread_service.create_thread(content="Thread content", topic="it")

    assert thread.content == "Thread content"
    assert thread.topic == "it"
