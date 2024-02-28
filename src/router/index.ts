import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Typography from "../views/Typography.vue";
import Components from "@/views/Components.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/Typography", name: "About", component: Typography },
  { path: "/Components", name: "Components", component: Components },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
