import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/houme/Home.vue"),
  },
  {
    path: "/home/:id",
    name: "HomeCard",
    component: () => import("@/components/card/HomeCard.vue"),
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    component: () => import("@/views/bookmarks/bookmarks.vue"),
  },
  {
    path: "/purchases",
    name: "Purchases",
    component: () => import("@/views/purchases/purchases.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
