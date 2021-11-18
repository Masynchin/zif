import axios from "axios";

export async function getGeneral() {
  return (await axios.get("http://localhost:8000/api/comments/")).data;
}

export async function getThread(topic, threadId) {
  return (
    await axios.get(`http://localhost:8000/api/comments/${topic}/${threadId}`)
  ).data;
}

export async function getTopic(topicName) {
  return (await axios.get(`http://localhost:8000/api/comments/${topicName}`))
    .data;
}

export async function insertTopic(comment) {
  return (await axios.post("http://localhost:8000/api/comments/", comment))
    .data.__data__;
}
