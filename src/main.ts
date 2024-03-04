import "./assets/main.css";
import "./assets/variables.css";
import "./assets/fonts.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
