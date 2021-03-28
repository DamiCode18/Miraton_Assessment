import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    component: () =>
      import(/* webpackChunkName: "Investment" */ "../views/Investments.vue")
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () =>
      import(
        /* webpackChunkName:  "PageNotFound" */ "../views/PageNotFound.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
