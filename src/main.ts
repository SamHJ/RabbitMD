import { createApp } from "vue";
import App from "./views/App/index.vue";
import "./registerServiceWorker";
import router from "./router";
import { store, key } from "./store";
import "./index.css";

const app = createApp(App);

// pass the injection key
app.use(store, key);

//setup router
app.use(router);

//mount app
app.mount("#app");
