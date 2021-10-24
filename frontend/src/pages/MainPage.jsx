import axios from "axios";
import { useEffect, useState } from "react";
import CommentsList from "../components/CommentsList";
import { withChildren } from "../components/utils";

export default function MainPage() {
  const [threadsHeads, setThreadsHeads] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/comments/")
      .then((response) => setThreadsHeads(withChildren(response.data)));
  }, []);

  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      {threadsHeads.length ? (
        <CommentsList comments={threadsHeads} />
      ) : (
        <p>Похоже, что ещё нет ни одного обсуждения</p>
      )}
    </div>
  );
}