<template>
    <div>
        <notifications />

        <Menu />

        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import Menu from "@/components/menu/Menu.vue";
import { RouterView } from "vue-router";
</script>
