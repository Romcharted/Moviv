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

    padding: 10px 0;
    border-radius: var(--border-radius);
    transition: all 0.3s;
}

.nav-item a:hover {
    background: var(--text-color);
    color: var(--secondary-color);
}

.nav-item a.router-link-exact-active {
    background: var(--main-color);
    background-size: 150% auto;
    transition: 0.5s;
    font-weight: 600;
    color: var(--text-btn-color);
}

.nav-item a.router-link-exact-active:hover {
    background-position: right center;
}
</style>
