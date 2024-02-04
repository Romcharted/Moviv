<template>
    <li class="nav-item">
        <router-link :to="{ name: routeConfig.name }" aria-current-value="page">
            <i class="material-icons-outlined">{{ routeConfig.meta.icon }}</i>
            <span>{{ $t("menu." + routeConfig.meta.menu) }}</span>
        </router-link>
    </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps(["routeConfig"]);
</script>

<style>
.nav-item {
    width: 100%;
}

.nav-item a {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    border-radius: var(--border-radius);
    padding: 10px 15px;

    transition: all 0.3s;
}

.nav-item a.router-link-exact-active {
    background-color: var(--main-color);
    font-weight: 600;
    color: var(--text-btn-color);
}
</style>
