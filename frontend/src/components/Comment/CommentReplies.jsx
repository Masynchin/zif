import { Link } from "react-router-dom";

export default function CommentReplies({ replies }) {
  return (
    replies && (
      <small>
        <span>Ответы:</span>
        <div className="flex space-x-2">
          {replies.map((reply) => (
            <Link
              key={reply.id}
              to={`#${reply.id}`}
              className="text-red-500"
            >{`#${reply.id}`}</Link>
          ))}
        </div>
      </small>
    )
  );
}
