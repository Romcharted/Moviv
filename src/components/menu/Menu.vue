<template>
    <div id="menu" class="menu">
        <MenuTop />
        <MenuCenter />
        <MenuList />
        <MenuBottom />
    </div>
</template>

<script setup lang="ts">
import MenuTop from "./menuTop/MenuTop.vue";
import MenuCenter from "./menuCenter/MenuCenter.vue";
import MenuList from "./menuList/MenuList.vue";
import MenuBottom from "./MenuBottom.vue";
</script>

<style>
#menu {
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

    width: 64px;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    overflow: hidden;
    transition: all 0.3s;
}

#menu:hover {
    width: 260px;
}

#menu span {
    opacity: 0;
    transition: opacity 0.3s;
}

#menu:hover span {
    opacity: 1;
}

#menu i {
    margin-left: 4px;
    transition: all 0.3s;
}

#menu:hover i {
    margin-left: 0;
}

#menu:hover .menu-top__notification {
    padding: 0px 15px;
}

#menu:hover .menu-list__title {
    padding-left: 15px;
}

#menu:hover .menu-top__profile {
    padding: 0px 15px;
}

#menu:hover .nav-item a {
    padding: 10px 15px;
}
</style>
