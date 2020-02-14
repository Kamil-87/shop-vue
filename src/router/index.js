import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/checkout",
    name: "checkout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Checkout" */ "@/views/Checkout.vue")
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () => import("@/views/Catalog")
  },
  {
    path: "/shopping-cart",
    name: "shopping-cart",
    component: () => import("@/views/ShoppingCart")
  },
  {
    path: "/single-page",
    name: "single-page",
    component: () => import("@/views/SinglePage")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
