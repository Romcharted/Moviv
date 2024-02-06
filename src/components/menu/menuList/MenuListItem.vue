<template>
    <li :class="{ 'menu-list__item': true, isFirst: isFirst }">
        <span class="menu-list__item-before"></span>
        <router-link :to="generateRouteLink()">{{ name }}</router-link>
    </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps(["name", "link", "id", "isFirst"]);

const generateRouteLink = () => {
    if (props.id !== undefined && props.id !== null) {
        return { name: props.link, params: { id: props.id } };
    } else {
        return { name: props.link };
    }
};
</script>

<style>
.menu-list__item {
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
}

.menu-list__item a {
    width: 100%;
    padding: 5px;
    border-radius: var(--border-radius);
    transition: all 0.3s;
}

.menu-list__item a.router-link-exact-active {
    background-color: var(--main-color);
    font-weight: 600;
    color: var(--text-btn-color);
}

.menu-list__item-before {
    width: 60px;
    height: 100%;
    position: relative;
}

.menu-list__item-before::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -30px;
    width: 2px;
    height: calc(50% + 30px);
    background-color: var(--text-color);
}
.menu-list__item.isFirst .menu-list__item-before::before {
    top: -5px;
    height: calc(50% + 5px);
}

.menu-list__item-before::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);

    width: 35%;
    height: 2px;
    background-color: var(--text-color);
}
</style>
