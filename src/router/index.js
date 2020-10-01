import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Panama from "../views/Panama.vue";

Vue.use(VueRouter);

// Exercise note:: the 'Home' and 'Panama" pages load all js from the start. The rest of the pages 'lazy load' the js only when the user actually navigates to the path.
// Exercise note: most paths received webpackchunknames. This way the js files are named, and they show up under these names when you inspect (useful for debugging?)

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
    component: () =>
      import(/* WebPackChunkName="about" */ "../views/About.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () =>
      import(/* WebPackChunkName="brazil" */ "../views/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import(/* WebPackChunkName="hawaii"*/ "../views/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* WebPackChunkName="jamaica"*/ "../views/Jamaica.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: Panama,
  },

  {
    path: "/details/:id",
    name: "DestinationDetails",
    component: () =>
      import(
        /* WebPackChunkName="destinationdetails" */ "../views/DestinationDetails.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
