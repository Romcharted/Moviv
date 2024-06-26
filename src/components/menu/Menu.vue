<template>
    <div
        id="menu"
        class="menu"
        :class="{ isActive: menuIsActive, isHover: menuIsHover }"
    >
        <div
            class="menu-open-btn"
            @click="ToggleActiveMenu"
            @mouseenter="ToggleHoverMenu"
            @mouseleave="ToggleHoverMenu"
        >
            <i class="material-icons-outlined"> push_pin </i>
        </div>

        <MenuMobile @menu-toggled="updateMenuIsActive" />

        <div
            class="menu-container"
            @mouseenter="ToggleHoverMenu"
            @mouseleave="ToggleHoverMenu"
        >
            <MenuTop />
            <div class="menu-link">
                <MenuCenter />
                <MenuList />
            </div>
            <MenuBottom />
        </div>
    </div>
</template>

<script setup lang="ts">
import MenuMobile from "./MenuMobile.vue";
import MenuTop from "./menuTop/MenuTop.vue";
import MenuCenter from "./menuCenter/MenuCenter.vue";
import MenuList from "./menuList/MenuList.vue";
import MenuBottom from "./MenuBottom.vue";

import { ref } from "vue";

const menuIsHover = ref(false);
const menuIsActive = ref(false);

const updateMainContentPadding = (forceLargePadding: boolean = false) => {
    const mainContent = document.getElementById("main-content");

    if (!mainContent) return;
    if (forceLargePadding) {
        mainContent.style.padding = "0px 0px 0px 260px";
    } else {
        mainContent.style.padding =
            menuIsActive.value || menuIsHover.value
                ? "0px 0px 0px 260px"
                : "0px 0px 0px 60px";
    }
};

const ToggleActiveMenu = () => {
    menuIsActive.value = !menuIsActive.value;
    updateMainContentPadding();
};

const ToggleHoverMenu = () => {
    if (!menuIsActive.value) {
        menuIsHover.value = !menuIsHover.value;
        updateMainContentPadding();
    }
};

const updateMenuIsActive = (isActive: boolean) => {
    menuIsActive.value = isActive;
    updateMainContentPadding();
};
</script>

<style>
#menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 64px;
    transition: all 0.3s;
    z-index: 98;
}

.menu-open-btn {
    position: absolute;
    top: 138px;
    right: -23px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    width: 46px;
    height: 46px;

    background: var(--text-color);
    z-index: 99;
    cursor: pointer;
    transition: all 0.3s;
}

.menu-open-btn i {
    color: var(--secondary-color);
    font-size: 30px;
    transition: all 0.3s;
}

.menu-open-btn:hover,
#menu.isActive .menu-open-btn {
    background: var(--main-color);
}

.menu-open-btn:hover i,
#menu.isActive .menu-open-btn i {
    color: var(--text-color);
}

.menu-container {
    font-family: "Noto Serif", sans-serif;
    font-size: 16px;
    color: var(--text-color);
    background: var(--secondary-color);
    text-wrap: nowrap;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100vh;
    max-height: 100vh;

    overflow: hidden;
    transition: all 0.3s;
}

/* ============================== Menu Link ============================== */
.menu-link {
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
}

.menu-link::-webkit-scrollbar {
    width: 10px; /* Largeur de la barre de défilement */
}

.menu-link::-webkit-scrollbar-thumb {
    background: var(
        --main-color
    ); /* Couleur de fond de la poignée de défilement */
    border-radius: 5px; /* Bordure de la poignée de défilement */
}

.menu-link::-webkit-scrollbar-track {
    background: var(
        --secondary-color
    ); /* Couleur de fond de la piste de défilement */
}

/* Pour cacher la barre de défilement horizontale */
.menu-link::-webkit-scrollbar-horizontal {
    display: none;
}

#menu.isHover,
#menu.isActive {
    width: 260px;
}

#menu.isHover .menu-link,
#menu.isActive .menu-link {
    overflow-y: auto;
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
    padding: 5px 15px;
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

/* ===============  Menu Bottom =============== */
#menu.isHover .menu-bottom__item,
#menu.isActive .menu-bottom__item {
    padding: 10px 15px;
}
/* =============== End Menu Bottom =============== */

/* ============================== End Menu Link ============================== */
@media only screen and (max-width: 764px) {
    .menu-open-btn {
        display: none;
    }

    #menu {
        width: 100%;
        height: 0;
    }

    #menu.isHover,
    #menu.isActive {
        width: 100%;
    }

    #menu .menu-container {
        width: 0;
        height: calc(100vh - 80px);
    }

    #menu.isActive .menu-container {
        width: 100% !important;
    }

    .menu-top {
        padding: 15px;
    }

    .menu-center {
        padding: 20px 15px 15px 15px;
    }

    .menu-bottom {
        border-top: 1px solid #505050;
        padding: 15px;
    }
}
</style>
