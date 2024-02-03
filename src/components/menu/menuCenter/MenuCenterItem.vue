<template>
    <li class="nav-item">
        <router-link :to="{ name: routeConfig.name }" aria-current-value="page">
            {{ $t("menu." + routeConfig.meta.label) }}
        </router-link>
    </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps(["routeConfig"]);
const t = useI18n();
</script>
