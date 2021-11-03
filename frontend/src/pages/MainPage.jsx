import axios from "axios";
import { useEffect, useState } from "react";
import ThreadsHeadsList from "../components/ThreadsHeadsList";

export default function MainPage() {
  const [threadsHeads, setThreadsHeads] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/comments/")
      .then((response) => setThreadsHeads(response.data));
  }, []);

  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      {threadsHeads.length ? (
        <ThreadsHeadsList threadsHeads={threadsHeads} />
      ) : (
        <p>Похоже, что ещё нет ни одного обсуждения</p>
      )}
    </div>
  );
}
