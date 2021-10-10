export default function NavItem({ href, children }) {
  return (
    <li>
      <a href={href} className="text-2xl block px-2 py-1 hover:text-red-600">
        {children}
      </a>
    </li>
  );
}
