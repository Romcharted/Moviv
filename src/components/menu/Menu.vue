<template>
    <div id="menu">
        <p>Menu</p>
        <MenuCenter />
    </div>
</template>

<script setup lang="ts">
import MenuCenter from "./menuCenter/MenuCenter.vue";
</script>

<style>
#menu {
    font-family: "Noto Serif", sans-serif;
    font-size: 14px;
    color: var(--text-color);
}
</style>
