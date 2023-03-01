import { useState } from "react";
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentReplies from "./CommentReplies";
import CommentButtons from "./CommentButtons";
import ReplyForm from "./ReplyForm";

export default function Comment({
  id,
  parent_id,
  content,
  timestamp,
  replies,
}) {
  const [showReply, setShowReply] = useState(false);
  const toggleReplyForm = () => setShowReply((current) => !current);
  const closeReplyForm = () => setShowReply(false);

  return (
    <div
      id={id}
      className="border border-black border-opacity-25 rounded p-3 max-w-screen-md w-full"
    >
      <CommentHeader id={id} timestamp={timestamp} />
      <CommentBody parent_id={parent_id} content={content} />
      <CommentReplies replies={replies} />
      <CommentButtons onReply={toggleReplyForm} />
      {showReply && <ReplyForm parentId={id} closeForm={closeReplyForm} />}
    </div>
  );
}
