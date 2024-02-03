<template>
    <div>
        <nav>
            <ul>
                <MenuCenterItem
                    v-for="(routeConfig, index) in filteredRoutes"
                    :key="index"
                    :route-config="routeConfig"
                />
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import MenuCenterItem from "./MenuCenterItem.vue";

const router = useRouter();
const filteredRoutes = router.options.routes.filter((r) => r.meta?.menu);
</script>
