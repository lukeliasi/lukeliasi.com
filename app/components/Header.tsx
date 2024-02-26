import { Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import { Menu, MenuCSS } from "./Menu/Menu";

import styles from "../styles/Header.css";

export const HeaderCSS: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...MenuCSS(),
];

export function Header() {
  return (
    <header className="container">
      <div className="header-left">
        <Link to="/" className="avatar">
          <img width="35" className="profile-pic" src="/images/profile-pic.jpg" alt="Luke Liasi" />
          <span className="name">Luke Liasi</span>
        </Link>
      </div>

      <div className="header-right">
        <Menu />
      </div>
    </header>
  );
}