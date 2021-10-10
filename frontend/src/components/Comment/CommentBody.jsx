import CommentParentLink from "./CommentParentLink";

export default function CommentBody({ parent_id, content }) {
  return (
    <p className="font-sans py-2 text-lg whitespace-pre-line">
      <CommentParentLink parent_id={parent_id} />
      {parseCommentContent(content)}
    </p>
  );
}

function parseCommentContent(text) {
  return text
    .split("\n")
    .map((line, i) =>
      line.startsWith(">") ? (
        <span key={i} className="text-blue-600">{`${line}\n`}</span>
      ) : (
        line
      )
    );
}
