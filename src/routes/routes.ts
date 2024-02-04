import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Movie from "@/views/Movie.vue";
import Search from "@/views/Search.vue";
import Discovery from "@/views/Discovery.vue";
import News from "@/views/News.vue";
import ComingSoon from "@/views/ComingSoon.vue";
import Top100 from "@/views/Top100.vue";
import NotFound from "@/views/404.vue";
import Notifications from "@/views/Notifications.vue";
import Settings from "@/views/Settings.vue";
import LogIn from "@/views/LogIn.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Home,
        name: "Home",
        meta: {
            menu: "home",
            icon: "home",
        },
    },
    {
        path: "/movie",
        component: Movie,
        name: "Movie",
        meta: {
            menu: "movie",
            icon: "movie",
        },
    },
    {
        path: "/search",
        component: Search,
        name: "Search",
        meta: {
            menu: "search",
            icon: "search",
        },
    },
    {
        path: "/discovery",
        component: Discovery,
        name: "Discovery",
        meta: {
            menu: "discovery",
            icon: "explore  ",
        },
    },
    {
        path: "/news",
        component: News,
        name: "News",
        meta: {
            menu: "news",
            icon: "new_releases",
        },
    },
    {
        path: "/coming-soon",
        component: ComingSoon,
        name: "ComingSoon",
        meta: {
            menu: "coming-soon",
            icon: "alarm",
        },
    },
    {
        path: "/top-100",
        component: Top100,
        name: "Top100",
        meta: {
            menu: "top-100",
            icon: "grade",
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
        path: "/log-in",
        component: LogIn,
        name: "LogIn",
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
