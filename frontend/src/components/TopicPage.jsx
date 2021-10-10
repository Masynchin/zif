import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateThread from "./CreateThread/Button";
import Comment from "./Comment/Comment";

export default function TopicPage() {
  const { topic } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/comments/${topic}`)
      .then((response) => setComments(withChildren(response.data)));
  }, [topic]);

  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      <CreateThread />
      {comments.length ? (
        comments.map((comment) => <Comment key={comment.id} {...comment} />)
      ) : (
        <p>Похоже, что ещё нет комментариев</p>
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
