import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateThread from "../components/CreateThread";
import ThreadsHeadsList from "../components/ThreadsHeadsList";

export default function TopicPage() {
  const { topic } = useParams();
  const [threadsHeads, setThreadsHeads] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/comments/${topic}`)
      .then((response) => setThreadsHeads(response.data));
  }, [topic]);

  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      <CreateThread />
      {threadsHeads.length ? (
        <ThreadsHeadsList threadsHeads={threadsHeads} />
      ) : (
        <p>Похоже, что ещё нет комментариев</p>
      )}
    </div>
  );
}
