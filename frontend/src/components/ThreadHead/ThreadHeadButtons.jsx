import CommentButton from "../Comment/CommentButton";

export default function ThreadHeadButtons({ id, topic }) {
  return (
    <div className="flex space-x-4">
      <CommentButton url={topic} id={id}>
        К обсуждению
      </CommentButton>
    </div>
  );
}
