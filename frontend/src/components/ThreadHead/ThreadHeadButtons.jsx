import { useRouteMatch } from "react-router";
import CommentButton from "../Comment/CommentButton";

export default function ThreadHeadButtons({ id }) {
  let { url } = useRouteMatch();

  return (
    <div className="flex space-x-4">
      <CommentButton url={url} id={id}>
        К обсуждению
      </CommentButton>
    </div>
  );
}
