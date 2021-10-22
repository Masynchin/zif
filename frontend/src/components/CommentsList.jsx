import Comment from "./Comment";

export default function CommentsList({ comments }) {
  return comments.map((comment) => <Comment key={comment.id} {...comment} />);
}
