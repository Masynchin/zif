import { Link } from "react-router-dom";

export default function CommentParentLink({ parent_id }) {
  return parent_id ? (
    <>
      <Link
        to={`#${parent_id}`}
        className="text-red-500"
      >{`#${parent_id}`}</Link>
      to
      <br></br>
    </>
  ) : null;
}
