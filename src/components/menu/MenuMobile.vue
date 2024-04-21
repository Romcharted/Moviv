<template>
    <div class="menu-mobile">
        <img src="@/assets/img/logo-no-background.png" alt="Profile image" />

        <div
            class="menu-mobile__hamburger-menu"
            @click="toggleMenu"
            :class="{ isActive: isMenuActive }"
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const emit = defineEmits();

const isMenuActive = ref(false);

const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
    emit("menu-toggled", isMenuActive.value);
};
</script>

<style>
.menu-mobile {
    width: 100%;
    background: var(--secondary-color);

    display: none;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;

    padding: 5px 20px;
}

.menu-mobile img {
    width: 180px;
    height: 45px;
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius);
}

.menu-mobile__hamburger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 50px;
    height: 34px;
    margin: 15px;
    cursor: pointer;
}

.menu-mobile__hamburger-menu span {
    position: relative;
    height: 6px;
    width: 50px;
    background: var(--text-color);
    border-radius: 3px;
    transition: all 0.3s ease-in-out !important;
    opacity: 1 !important;
}

.menu-mobile__hamburger-menu span:nth-child(1) {
    width: 66%;
}

.menu-mobile__hamburger-menu span:nth-child(2) {
    width: 100%;
}

.menu-mobile__hamburger-menu span:nth-child(3) {
    width: 33%;
}

.menu-mobile__hamburger-menu:hover span:nth-child(1) {
    transform: translateY(-3px);
}

.menu-mobile__hamburger-menu:hover span:nth-child(3) {
    transform: translateY(3px);
}

.menu-mobile__hamburger-menu.isActive {
    height: 40px;
}

.menu-mobile__hamburger-menu.isActive span:nth-child(1) {
    transform: translateY(17px) translateX(0) rotate(-45deg);
    width: 50px;
}

.menu-mobile__hamburger-menu.isActive span:nth-child(2) {
    transform: rotate(45deg);
}

.menu-mobile__hamburger-menu.isActive span:nth-child(3) {
    transform: translateY(-17px) rotate(45deg);
    width: 50px;
}

@media only screen and (max-width: 764px) {
    .menu-mobile {
        display: flex;
    }
}
</style>
