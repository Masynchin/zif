import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateThread from "../components/CreateThread";
import CommentsList from "../components/CommentsList";
import { withChildren } from "../components/utils";

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
        <CommentsList comments={comments} />
      ) : (
        <p>Похоже, что ещё нет комментариев</p>
      )}
    </div>
  );
}
