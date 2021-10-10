import { useRouteMatch } from "react-router";
import CommentButton from "./CommentButton";

export default function CommentButtons({ id }) {
  let { url } = useRouteMatch();

  return (
    <div className="flex space-x-4">
      <CommentButton url={url} id={id}>
        В тред
      </CommentButton>
      <CommentButton url={url} id={id}>
        Ответить
      </CommentButton>
    </div>
  );
}
