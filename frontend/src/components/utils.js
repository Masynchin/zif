export function withChildren(comments) {
  const parentChildren = new Map();
  comments.forEach(({ id, parent_id }) => {
    if (!parent_id) {
      return;
    }
    if (!parentChildren.has(parent_id)) {
      parentChildren.set(parent_id, []);
    }
    parentChildren.get(parent_id).push({ id: id });
  });
  return comments.map((comment) => {
    return { ...comment, children: parentChildren.get(comment.id) || [] };
  });
}
