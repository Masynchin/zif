import CommentHeader from "../Comment/CommentHeader";
import CommentBody from "../Comment/CommentBody";
import CommentButtons from "../Comment/CommentButtons";

const style = { width: "768px" };

export default function ThreadHead({ id, content, timestamp }) {
  return (
    <div
      id={id}
      className="border border-black border-opacity-25 rounded p-3 max-w-screen-md"
      style={style}
    >
      <CommentHeader id={id} timestamp={timestamp} />
      <CommentBody content={content} />
      <CommentButtons id={id} />
    </div>
  );
}
