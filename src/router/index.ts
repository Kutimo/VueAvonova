import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "../views/ViewHome.vue";
import ViewTypography from "../views/ViewTypography.vue";
import ViewComponents from "@/views/ViewComponents.vue";
import ViewLogin from "@/views/ViewLogin.vue";
import { supabase } from "@/lib/supabaseClient";

const routes = [
  { path: "/", name: "Home", component: ViewHome },
  { path: "/Typography", name: "About", component: ViewTypography },
  { path: "/Components", name: "Components", component: ViewComponents },
  { path: "/login", name: "Login", component: ViewLogin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authData = await supabase.auth.getUser();

  if (to.name !== "Login" && !authData.data.user) {
    // If trying to access a protected route and user is not logged in, redirect to login
    next({ name: "Login" });
  } else if (to.name === "Login" && authData.data.user) {
    // If trying to access the login page and user is already logged in, redirect to home
    next({ name: "Home" });
  } else {
    // Continue to the requested route
    next();
  }
});

export default router;
