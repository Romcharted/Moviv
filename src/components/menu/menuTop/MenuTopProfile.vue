<template>
    <div class="menu-top__profile">
        <img src="https://fakeimg.pl/40x40/" alt="Profile image" />
        <span>Profile Name</span>
    </div>
</template>

<script setup lang="ts"></script>

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
