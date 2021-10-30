import { NavLink } from "react-router-dom";

export default function NavItem({ to, children }) {
  return (
    <li>
      <NavLink
        to={to}
        className="text-2xl block px-2 py-1 hover:text-red-600"
        activeClassName="text-red-600"
      >
        {children}
      </NavLink>
    </li>
  );
}
