<template>
    <li class="nav-item">
        <router-link :to="{ name: routeConfig.name }" aria-current-value="page">
            {{ $t("menu." + routeConfig.meta.menu) }}
        </router-link>
    </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps(["routeConfig"]);
</script>
