<template>
    <div class="menu-top__profile">
        <img src="https://fakeimg.pl/50x50/" alt="Profile image" />
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
}

.menu-top__profile img {
    border-radius: var(--border-radius);
}
</style>
