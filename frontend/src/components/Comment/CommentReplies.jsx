export default function CommentReplies({ replies }) {
  return (
    <div className="flex space-x-2">
      {replies.map((reply) => (
        <a
          key={reply.id}
          href={`#${reply.id}`}
          className="text-red-500"
        >{`#${reply.id}`}</a>
      ))}
    </div>
  );
}
