import "./assets/main.css";
import "./assets/variables.css";
import "./assets/fonts.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Use the router
app.use(router);

// Use the Toast plugin
app.use(Toast);

// Mount the app
app.mount("#app");
