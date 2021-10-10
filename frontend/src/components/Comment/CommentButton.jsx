export default function CommentButton({ url, id, children }) {
  return (
    <a
      role="button"
      href={`${url}/${id}`}
      className="font-sans font-semibold text-red-600"
    >
      {children}
    </a>
  );
}
