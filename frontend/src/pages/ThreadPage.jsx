import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentsList from "../components/CommentsList";
import { withReplies } from "../components/utils";

export default function ThreadPage() {
  const { topic, threadId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/comments/${topic}/${threadId}`)
      .then((response) => setComments(withReplies(response.data)));
  }, [topic, threadId]);

  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      <CommentsList comments={comments} />
    </div>
  );
}
