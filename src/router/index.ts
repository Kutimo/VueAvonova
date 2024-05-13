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

/* router.beforeEach(async (to, from, next) => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user && to.name !== "Login") {
      // If user is not authenticated and trying to access a protected route,
      // redirect to the login page
      next({ name: "Login" });
    } else if (user && to.name === "Login") {
      // If user is authenticated and trying to access the login page,
      // redirect to the home page
      next({ name: "Home" });
    } else {
      // Continue to the requested route
      next();
    }
  } catch (error: any) {
    // If an error occurs asynchronously (e.g., user not authenticated),
    // handle it silently and redirect to the login page or another appropriate page
    console.error("Error fetching user data:", error.message);
    next({ name: "Login" });
  }
}); */

export default router;
