import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import SearchResultsPage from "@/views/SearchResultsPage.vue";

const routes = [
    { path: "/", component: LandingPage },
    { path: "/search", component: SearchResultsPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
