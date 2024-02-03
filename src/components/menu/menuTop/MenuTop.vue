<template>
    <div class="menu-top">
        <MenuTopProfile />
        <MenuTopNotification />
    </div>
</template>

<script setup lang="ts">
import MenuTopProfile from "./MenuTopProfile.vue";
import MenuTopNotification from "./MenuTopNotification.vue";
</script>

<style>
.menu-top {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;

    width: 100%;
    padding: 30px 15px 20px 15px;
    border-bottom: 1px solid #505050;
}
</style>
