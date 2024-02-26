import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// Global styles
import resetStyles from "./styles/_reset.css";
import 'tippy.js/dist/tippy.css';
import fontsStyles from "./styles/_fonts.css";
import varsStyles from "./styles/_vars.css";
import globalStyles from "./styles/_global.css";

import { Footer, FooterCSS } from "./components/Footer";
import { Header, HeaderCSS } from "./components/Header";
import { useBuzzwordHighlight } from "./util/useBuzzwordHighlight";

// https://remix.run/docs/en/main/styling/bundling#usage
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: resetStyles },
  { rel: 'stylesheet', href: fontsStyles },
  { rel: 'stylesheet', href: varsStyles },
  { rel: 'stylesheet', href: globalStyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ...FooterCSS(),
  ...HeaderCSS(),
];

export default function App() {
  useBuzzwordHighlight();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />

        <main className="content-main">
          <Outlet />
        </main>

        <Footer />
        {/* <BuzzwordHighlight /> */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
