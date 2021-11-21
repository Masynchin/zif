import CommentHeader from "../Comment/CommentHeader";
import CommentBody from "../Comment/CommentBody";
import ThreadHeadButtons from "./ThreadHeadButtons";

export default function ThreadHead({ id, content, timestamp }) {
  return (
    <div
      id={id}
      className="border border-black border-opacity-25 rounded p-3 max-w-screen-md w-full"
    >
      <CommentHeader id={id} timestamp={timestamp} />
      <CommentBody content={content} />
      <ThreadHeadButtons id={id} />
    </div>
  );
}
