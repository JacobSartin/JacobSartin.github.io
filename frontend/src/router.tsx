import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Nav from "@/components/Nav";
import HomePage from "@/page";
import AboutPage from "@/about/page";
import SkillsPage from "@/skills/page";
import ProjectsPage from "@/projects/page";
import RendererPage from "@/projects/3d-renderer/page";
import ClusterPage from "@/projects/cluster/page";
import SmeshVpnPage from "@/projects/smesh-vpn/page";
import ThisSite from "@/projects/this-site/page";
import NotFound from "@/not-found";

function RootLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const skillsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/skills",
  component: SkillsPage,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});

const rendererRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/3d-renderer",
  component: RendererPage,
});

const clusterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/cluster",
  component: ClusterPage,
});

const smeshVpnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/smesh-vpn",
  component: SmeshVpnPage,
});

const thisPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/this-site",
  component: ThisSite,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  skillsRoute,
  projectsRoute,
  rendererRoute,
  clusterRoute,
  smeshVpnRoute,
  thisPageRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
