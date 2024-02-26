import type { LinksFunction } from "@remix-run/node";
import { Menu_Item } from "./Menu_Item";

import styles from "../../styles/Menu.css";

export const MenuCSS: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export function Menu() {
  return (
    <nav className="menu-nav">
      <ul className="menu-list">
        <Menu_Item text="Projects" to="/projects" />
        <Menu_Item text="About" to="/about" />
        <Menu_Item text="Blog" to="/blog" />
        <Menu_Item text="Contact" to="/contact" />
        {/* <Button variant="outline" size="md" colorScheme="orange" href="/Luke_CV.pdf" download>
          Download Résumé
          <svg style="margin-top: -4px; margin-left: 8px; width: 16px;" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </Button> */}
      </ul>

      <button id="mobile-toggle-menu">
        <svg className="menu-burger-icon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z" stroke="none" />
        </svg>

        <svg style={{ display: "none" }} className="menu-close-icon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" stroke="none" />
        </svg>
      </button>
    </nav>
  )
}