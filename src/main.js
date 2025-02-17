import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";
import router from "./router";

const app = createApp(App);
const queryClient = new QueryClient();

// Provide Vue Query to the entire app
app.use(VueQueryPlugin, { queryClient });
app.use(router)

app.mount("#app");
