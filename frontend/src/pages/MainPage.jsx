import { useEffect, useState } from "react";
import ThreadsHeadsList from "../components/ThreadsHeadsList";
import * as api from "../api";

export default function MainPage() {
  const [threadsHeads, setThreadsHeads] = useState([]);

  useEffect(() => {
    (async () => {
      const threads = await api.getAllThreads();
      setThreadsHeads(threads);
    })();
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
