import axios from "axios";
import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";

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

function withChildren(comments) {
  const parentChildren = new Map();
  comments.forEach(({ id, parent_id }) => {
    if (!parent_id) {
      return;
    }
    if (!parentChildren.has(parent_id)) {
      parentChildren.set(parent_id, []);
    }
    parentChildren.get(parent_id).push({ id: id });
  });
  return comments.map((comment) => {
    return { ...comment, children: parentChildren.get(comment.id) || [] };
  });
}
