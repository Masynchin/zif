import { Link } from "react-router-dom";

export default function CommentButton({ url, id, children }) {
  return (
    <Link
      role="button"
      to={`${url}/${id}`}
      className="font-sans font-semibold text-red-600"
    >
      {children}
    </Link>
  );
}
