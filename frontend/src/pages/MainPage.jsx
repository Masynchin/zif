import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThreadsHeadsList from "../components/ThreadsHeadsList";
import { getGeneral } from "../store/actions/general";

export default function MainPage() {
  const dispatch = useDispatch();
  const threadsHeads = useSelector((state) => state.general.data);

  useEffect(() => dispatch(getGeneral()), []);

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
