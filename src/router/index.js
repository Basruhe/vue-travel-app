import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Panama from "../views/Panama.vue";

Vue.use(VueRouter);

// Exercise note:: the 'Home' and 'Panama" pages load all js from the start. The rest of the pages 'lazy load' the js only when the user actually navigates to the path.

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () => import("../views/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () => import("../views/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () => import("../views/Jamaica.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: Panama,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
