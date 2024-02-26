import { Link, useLocation } from '@remix-run/react'

interface Props {
  text: string;
  to: string;
}

export function Menu_Item(props: Props) {
  const location = useLocation();

  const isSelected = props.to === location.pathname || location.pathname.startsWith(`${props.to}/`)

  return (
    <li className="menu-item">
      <Link className={`menu-item-link ${isSelected ? "active" : ""}`} to={props.to}>{props.text}</Link>
    </li>
  );
}