import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import Notifications from "@kyvg/vue3-notification";
import router from "./routes/routes";

const app = createApp(App);
app.use(Notifications);
app.use(router);
app.mount("#app");
