export default function Nav({ children }) {
  return (
    <nav className="shadow p-2">
      <ul className="flex justify-center space-x-6">{children}</ul>
    </nav>
  );
}
