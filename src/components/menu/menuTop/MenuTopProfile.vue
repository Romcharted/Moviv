<template>
    <div class="menu-top__profile" v-if="authStore.IsLoggedIn">
        <img
            :src="
                authStore.CurrentUser?.photoURL ?? 'https://fakeimg.pl/40x40/'
            "
            alt="Profile image"
        />
        <span>{{ authStore.CurrentUser?.displayName }}</span>
    </div>
    <div class="menu-top__profile" v-else>
        <img src="https://fakeimg.pl/40x40/?text=Guest" alt="Guest image" />
        <span>Guest</span>
    </div>
</template>

<script setup lang="ts">
import UseAuthStore from "@/stores/useAuthStore";

const authStore = UseAuthStore();
</script>

<style>
.menu-top__profile {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    font-family: "Anton", sans-serif;
    font-size: 16px;

    width: 100%;
    height: 100%;

    transition: all 0.3s;
}

.menu-top__profile img {
    min-width: 40px;
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius);
}
</style>
