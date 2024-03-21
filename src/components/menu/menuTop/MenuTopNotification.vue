<template>
    <router-link to="/notifications" class="menu-top__notification">
        <div>
            <i class="material-icons-outlined">notifications</i>
            <span>{{ $t("menu.notification") }}</span>
        </div>
        <span class="menu-top__notification-number">8</span>
    </router-link>
</template>

<script setup lang="ts"></script>

<style>
.menu-top__notification {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-radius: var(--border-radius);
    padding: 5px 0;

    width: 100%;
    height: 100%;

    transition: all 0.3s;
}

.menu-top__notification:hover {
    background: var(--text-color);
    color: var(--secondary-color);
}

.menu-top__notification div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 12px;
}

.menu-top__notification-number {
    background-color: #e92e50;
    border-radius: var(--border-radius);
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color-light);
}
</style>
