import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "../views/ViewHome.vue";
import ViewTypography from "../views/ViewTypography.vue";
import ViewComponents from "@/views/ViewComponents.vue";
import ViewLogin from "@/views/ViewLogin.vue";

const routes = [
  { path: "/", name: "Home", component: ViewHome },
  { path: "/Typography", name: "About", component: ViewTypography },
  { path: "/Components", name: "Components", component: ViewComponents },
  // temp route for testing
  { path: "/login", name: "Login", component: ViewLogin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
