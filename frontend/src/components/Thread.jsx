import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentsList from "./CommentsList";

export default function Thread() {
  const { topic, threadId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/comments/${topic}/${threadId}`)
      .then((response) => setComments(withChildren(response.data)));
  }, [topic, threadId]);

  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      <CommentsList comments={comments} />
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
