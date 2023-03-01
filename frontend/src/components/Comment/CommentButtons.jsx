export default function CommentButtons({ onReply }) {
  return (
    <div className="flex space-x-4">
      <button
        className="font-sans font-semibold text-red-600"
        onClick={onReply}
      >
        Ответить
      </button>
    </div>
  );
}
