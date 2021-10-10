export default function CommentParentLink({ parent_id }) {
  return parent_id ? (
    <>
      <a href={`#${parent_id}`} className="text-red-500">{`#${parent_id}`}</a>
      <br></br>
    </>
  ) : null;
}
