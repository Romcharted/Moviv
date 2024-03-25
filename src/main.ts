import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import Notifications from "@kyvg/vue3-notification";
import router from "./routes/routes";
import i18n from "./i18n";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(Notifications);
app.use(router);
app.use(i18n);

app.use(createPinia());

app.mount("#app");
