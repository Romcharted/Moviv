<template>
    <div
        id="menu"
        class="menu"
        :class="{ isActive: menuIsActive, isHover: menuIsHover }"
    >
        <div class="menu-open-btn" @click="ToggleActiveMenu">
            <i class="material-icons-outlined"> chevron_right </i>
        </div>
        <div
            class="menu-container"
            @mouseenter="ToggleHoverMenu"
            @mouseleave="ToggleHoverMenu"
        >
            <MenuTop />
            <MenuCenter />
            <MenuList />
            <MenuBottom />
        </div>
    </div>
</template>

<script setup lang="ts">
import MenuTop from "./menuTop/MenuTop.vue";
import MenuCenter from "./menuCenter/MenuCenter.vue";
import MenuList from "./menuList/MenuList.vue";
import MenuBottom from "./MenuBottom.vue";

import { ref } from "vue";

const menuIsHover = ref(false);
const menuIsActive = ref(false);

const ToggleActiveMenu = () => {
    menuIsActive.value = menuIsActive.value ? false : true;
    menuIsHover.value = menuIsActive.value;
};

const ToggleHoverMenu = () => {
    if (!menuIsActive.value) {
        menuIsHover.value = menuIsHover.value ? false : true;
    }
};
</script>

<style>
#menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 64px;
    transition: all 0.3s;
}

#menu.isHover,
#menu.isActive {
    width: 260px;
}

.menu-open-btn {
    position: absolute;
    top: 128px;
    right: -23px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    width: 46px;
    height: 46px;

    background-color: var(--text-color);
    z-index: 99;
    cursor: pointer;
}

.menu-open-btn i {
    color: var(--secondary-color);
    font-size: 34px;
    transition: all 0.3s;
}

#menu.isHover .menu-open-btn i,
#menu.isActive .menu-open-btn i {
    transform: scaleX(-1);
}

.menu-container {
    font-family: "Noto Serif", sans-serif;
    font-size: 14px;
    color: var(--text-color);
    background-color: var(--secondary-color);
    text-wrap: nowrap;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100vh;

    overflow: hidden;
    transition: all 0.3s;
}

.menu-container span {
    opacity: 0;
    transition: opacity 0.3s;
}

#menu.isHover span,
#menu.isActive span {
    opacity: 1;
}

.menu-container i {
    margin-left: 4px;
    transition: all 0.3s;
}

#menu.isHover i,
#menu.isActive i {
    margin-left: 0;
}

.menu-container img {
    margin-left: -4px;
    transition: all 0.3s;
}

/* =============== Menu Top =============== */
#menu.isHover .menu-top__notification,
#menu.isActive .menu-top__notification {
    padding: 0px 15px;
}

#menu.isHover .menu-top__profile,
#menu.isActive .menu-top__profile {
    padding: 0px 15px;
}

/* =============== End Menu Top =============== */

/* =============== Menu Center Item =============== */
#menu.isHover .nav-item a,
#menu.isActive .nav-item a {
    padding: 10px 15px;
}
/* =============== End Menu Center Item =============== */

/* =============== Menu List =============== */
#menu.isHover .menu-list__title,
#menu.isActive .menu-list__title {
    padding-left: 15px;
}

#menu.isHover .menu-list__title .menu-list__title-chevron,
#menu.isActive .menu-list__title .menu-list__title-chevron {
    opacity: 1;
}

#menu.isHover .menu-list__items-container,
#menu.isActive .menu-list__items-container {
    opacity: 1;
}
/* =============== End Menu List =============== */
</style>
