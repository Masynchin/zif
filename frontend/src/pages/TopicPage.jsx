import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTopic } from "../store/actions/topic";
import CreateThread from "../components/CreateThread";
import ThreadsHeadsList from "../components/ThreadsHeadsList";

export default function TopicPage() {
  const { topic } = useParams();

  const dispatch = useDispatch();
  const threadsHeads = useSelector((state) => state.topic.data);

  useEffect(() => dispatch(getTopic(topic)), [topic]);

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
