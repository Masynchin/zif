import ThreadHead from "./ThreadHead";

export default function ThreadsHeadsList({ threadsHeads }) {
  return threadsHeads.map((threadHead) => (
    <ThreadHead key={threadHead.id} {...threadHead} />
  ));
}
