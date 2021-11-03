import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentReplies from "./CommentReplies";
import CommentButtons from "./CommentButtons";

const style = { width: "768px" };

export default function Comment({
  id,
  parent_id,
  content,
  timestamp,
  replies,
}) {
  return (
    <div
      id={id}
      className="border border-black border-opacity-25 rounded p-3 max-w-screen-md"
      style={style}
    >
      <CommentHeader id={id} timestamp={timestamp} />
      <CommentBody parent_id={parent_id} content={content} />
      <CommentReplies replies={replies} />
      <CommentButtons id={id} />
    </div>
  );
}
