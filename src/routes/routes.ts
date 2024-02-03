import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import ComingSoon from "@/views/ComingSoon.vue";
import Discovery from "@/views/Discovery.vue";
import Movie from "@/views/Movie.vue";
import News from "@/views/News.vue";
import Search from "@/views/Search.vue";
import Top100 from "@/views/Top100.vue";
import NotFound from "@/views/404.vue";
import Notifications from "@/views/Notifications.vue";
import Settings from "@/views/Settings.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Home,
        name: "Home",
        meta: {
            menu: "home",
        },
    },
    {
        path: "/coming-soon",
        component: ComingSoon,
        name: "ComingSoon",
        meta: {
            menu: "coming-soon",
        },
    },
    {
        path: "/discovery",
        component: Discovery,
        name: "Discovery",
        meta: {
            menu: "discovery",
        },
    },
    {
        path: "/movie",
        component: Movie,
        name: "Movie",
        meta: {
            menu: "movie",
        },
    },
    {
        path: "/news",
        component: News,
        name: "News",
        meta: {
            menu: "news",
        },
    },
    {
        path: "/search",
        component: Search,
        name: "Search",
        meta: {
            menu: "search",
        },
    },
    {
        path: "/top-100",
        component: Top100,
        name: "Top100",
        meta: {
            menu: "top-100",
        },
    },
    {
        path: "/notifications",
        component: Notifications,
        name: "Notifications",
    },
    {
        path: "/settings",
        component: Settings,
        name: "Settings",
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
