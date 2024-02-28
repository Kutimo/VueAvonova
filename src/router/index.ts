import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "../views/ViewHome.vue";
import ViewTypography from "../views/ViewTypography.vue";
import ViewComponents from "@/views/ViewComponents.vue";

const routes = [
  { path: "/", name: "Home", component: ViewHome },
  { path: "/Typography", name: "About", component: ViewTypography },
  { path: "/Components", name: "Components", component: ViewComponents },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
 