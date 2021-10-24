import { useRouteMatch } from "react-router-dom";

export default function NavItem({ href, children }) {
  const { params: { topic } = { topic: "" } } = useRouteMatch("/:topic") || {};

  return (
    <li>
      <a
        href={`/${href}`}
        className={
          "text-2xl block px-2 py-1 hover:text-red-600" +
          (topic === href ? " text-red-600" : "")
        }
      >
        {children}
      </a>
    </li>
  );
}
