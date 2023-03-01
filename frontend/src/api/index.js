import axios from "axios";

export async function getGeneral() {
  return (await axios.get("http://localhost:8000/api/threads/")).data;
}

export async function getThread(topic, threadId) {
  return (
    await axios.get(`http://localhost:8000/api/threads/${topic}/${threadId}`)
  ).data;
}

export async function getTopic(topicName) {
  return (await axios.get(`http://localhost:8000/api/threads/${topicName}`))
    .data;
}

export async function insertTopic(comment) {
  return (await axios.post("http://localhost:8000/api/threads/", comment)).data
    .__data__;
}

export async function createReply(reply) {
  return (await axios.post("http://localhost:8000/api/comments/", reply)).data;
}
