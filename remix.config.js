import routes from './app/routes.js';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/*.css"],
  routes: routes,
};

