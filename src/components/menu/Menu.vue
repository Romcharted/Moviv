<template>
    <div id="menu" class="menu">
        <MenuTop />
        <MenuCenter />
        <MenuBottom />
    </div>
</template>

<script setup lang="ts">
import MenuTop from "./menuTop/MenuTop.vue";
import MenuCenter from "./menuCenter/MenuCenter.vue";
import MenuBottom from "./MenuBottom.vue";
</script>

<style>
#menu {
    font-family: "Noto Serif", sans-serif;
    font-size: 14px;
    color: var(--text-color);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    width: 260px;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    background-color: var(--secondary-color);
}
</style>
