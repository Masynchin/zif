import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getThread } from "../store/actions/thread";
import CommentsList from "../components/CommentsList";

export default function ThreadPage() {
  const { topic, threadId } = useParams();

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.thread.data);

  useEffect(() => dispatch(getThread(topic, threadId)), [topic, threadId]);

  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      <CommentsList comments={comments} />
    </div>
  );
}
