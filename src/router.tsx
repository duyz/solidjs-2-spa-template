import { lazy } from "solid-js";
import { createRouter } from "@solidjs/router";

export const Router = createRouter({
  routes: [
    { path: "/", component: lazy(() => import("./pages/home")) },
    { path: "/about", component: lazy(() => import("./pages/about")) },
    { path: "*404", component: lazy(() => import("./pages/not-found")) },
  ],
});

export const { paths } = Router;
