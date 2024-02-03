<template>
    <nav class="menu-center">
        <ul>
            <MenuCenterItem
                v-for="(routeConfig, index) in filteredRoutes"
                :key="index"
                :route-config="routeConfig"
            />
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import MenuCenterItem from "./MenuCenterItem.vue";

const router = useRouter();
const filteredRoutes = router.options.routes.filter((r) => r.meta?.menu);
</script>

<style>
.menu-center {
    width: 100%;
    padding: 15px;
}

.menu-center ul {
    padding-left: 0;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 0px;
}
</style>
