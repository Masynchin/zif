import Comment from "./Comment";
import { withReplies } from "./utils";

export default function CommentsList({ comments }) {
  return withReplies(comments).map((comment) => (
    <Comment key={comment.id} {...comment} />
  ));
}
