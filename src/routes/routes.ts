import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import ComingSoon from "@/views/ComingSoon.vue";
import Discovery from "@/views/Discovery.vue";
import Movie from "@/views/Movie.vue";
import News from "@/views/News.vue";
import Search from "@/views/Search.vue";
import Top100 from "@/views/Top100.vue";
import NotFound from "@/views/404.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Home,
        name: "Home",
        meta: {
            label: "Home",
        },
    },
    {
        path: "/coming-soon",
        component: ComingSoon,
        name: "ComingSoon",
        meta: {
            label: "Coming Soon",
        },
    },
    {
        path: "/discovery",
        component: Discovery,
        name: "Discovery",
        meta: {
            label: "Discovery",
        },
    },
    {
        path: "/movie",
        component: Movie,
        name: "Movie",
        meta: {
            label: "Movie",
        },
    },
    {
        path: "/news",
        component: News,
        name: "News",
        meta: {
            label: "News",
        },
    },
    {
        path: "/search",
        component: Search,
        name: "Search",
        meta: {
            label: "Search",
        },
    },
    {
        path: "/top-100",
        component: Top100,
        name: "Top100",
        meta: {
            label: "Top 100",
        },
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
        name: "404",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
