export default function CommentHeader({ id, timestamp }) {
  const relativeTime = getRelativeTime(timestamp);

  return (
    <p className="font-sans text-black text-opacity-70">
      {relativeTime} #{id}
    </p>
  );
}

function getRelativeTime(timestamp) {
  const diff = new Date().getTime() - new Date(timestamp).getTime();
  const seconds = diff / 1000;
  if (seconds < 30) {
    return "Только что";
  }
  if (seconds < 60) {
    return `${Math.ceil(seconds)} секунд назад`;
  }
  const minutes = seconds / 60;
  if (minutes < 60) {
    return `${Math.ceil(minutes)} минут назад`;
  }
  const hours = minutes / 60;
  if (hours < 24) {
    return `${Math.ceil(hours)} часов назад`;
  }
  const days = hours / 24;
  if (days < 30) {
    return `${Math.ceil(days)} дней назад`;
  }
  return timestamp;
}
