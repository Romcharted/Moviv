<template>
    <notifications />

    <Menu />

    <div id="main-content">
        <router-view class="main-content-container" />
    </div>
</template>

<script setup lang="ts">
import Menu from "@/components/menu/Menu.vue";
import { RouterView } from "vue-router";
</script>

<style scoped>
#main-content {
    width: 100%;
    transition: all 0.3s;
    padding: 0px 0px 0px 60px;
}

.main-content-container {
    width: 100%;
}
</style>
