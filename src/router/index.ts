import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/Typography.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/Typography", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
