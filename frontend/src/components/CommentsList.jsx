import Comment from "./Comment";

export default function CommentsList({ comments }) {
  return withReplies(comments).map((comment) => (
    <Comment key={comment.id} {...comment} />
  ));
}

function withReplies(comments) {
  const parentChildren = new Map();
  comments.forEach(({ id, parent_id }) => {
    if (!parent_id) {
      return;
    }
    if (!parentChildren.has(parent_id)) {
      parentChildren.set(parent_id, []);
    }
    parentChildren.get(parent_id).push({ id: id });
  });
  return comments.map((comment) => {
    return { ...comment, replies: parentChildren.get(comment.id) || [] };
  });
}
