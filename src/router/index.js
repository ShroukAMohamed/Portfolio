import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import PortfolioView from "../views/PortfolioView.vue";
import LocationView from "../views/LocationView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Portfolio",
    name: "portfolio",
    component: () => import("../views/PortfolioView.vue"),
  },
  {
    path: "/Location",
    name: "Location",
    component: LocationView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
