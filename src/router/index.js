import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/investments",
    name: "Investments",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Investments.vue")
  },
  {
    path: "*",
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
