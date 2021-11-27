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
    .flatMap((line, i) => [
      <br />,
      line.startsWith(">") ? <ColoredSpan key={i} text={line} /> : line,
    ])
    .slice(1);
}

function ColoredSpan({ text }) {
  return <span className="text-blue-600">{text}</span>;
}
