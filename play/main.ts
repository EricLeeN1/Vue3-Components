import { createApp } from "vue";
import App from "./app.vue";
import ericest from "@vue3components/components";

const app = createApp(App);
app.use(ericest);
app.mount("#app");
