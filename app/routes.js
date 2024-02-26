const routes = async (defineRoutes) => {
  return defineRoutes((route) => {
    // * NOTE Server reboot required after changing routes here
    route("/", "routing/home/home.tsx", { index: true });
    route("/about", "routing/about/about.tsx", { index: true });
    route("/projects", "routing/projects/projects.tsx", { index: true });
  });
};

export default routes;