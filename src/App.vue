<template>
    <notifications />

    <Menu />

    <router-view class="main-content" />
</template>

<script setup lang="ts">
import Menu from "@/components/menu/Menu.vue";
import { RouterView } from "vue-router";
</script>

<style scoped>
.main-content {
    width: 100%;
    padding-left: 260px;
}
</style>
