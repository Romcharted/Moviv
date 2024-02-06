<template>
    <div class="menu-list">
        <div
            class="menu-list__title"
            :class="{
                isExpanded: isExpanded,
                'router-link-exact-active': $route.name === 'Lists',
            }"
        >
            <router-link :to="{ name: 'Lists' }" class="menu-list__title-text">
                <i class="material-icons-outlined"> bookmarks </i>
                <span>{{ $t("menu.my-list") }}</span>
            </router-link>
            <i
                class="material-icons-outlined menu-list__title-chevron"
                @click="toggleExpansion"
            >
                expand_more
            </i>
        </div>

        <ul class="menu-list__items-container">
            <TransitionGroup
                name="menu-list__items-container"
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
            >
                <template v-if="isExpanded && isConnected">
                    <MenuListItem
                        v-for="(list, index) in lists"
                        :key="index"
                        :name="list.name"
                        :link="'OneList'"
                        :id="list.id"
                        :isFirst="index === 0"
                    />
                </template>
                <template v-else-if="isExpanded">
                    <MenuListItem
                        :name="$t('menu.connect')"
                        link="LogIn"
                        isFirst="true"
                    />
                </template>
            </TransitionGroup>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { gsap } from "gsap";
import MenuListItem from "./MenuListItem.vue";

const isExpanded = ref(false);

const toggleExpansion = () => {
    isExpanded.value = !isExpanded.value;
};

const isConnected = ref(true);
const lists = ref<Array<{ id: number; name: string }>>([]);

// Exemple
lists.value = [
    { id: 1245, name: "List 1" },
    { id: 7534, name: "List 2" },
    { id: 1404, name: "List 3" },
];

const beforeEnter = (el: Element) => {
    gsap.set(el, { opacity: 0, height: 0 });
};

const enter = (el: Element, done: any) => {
    gsap.to(el, {
        opacity: 1,
        height: "1.6em",
        stagger: 0.15,
        onComplete: done,
    });
};

const leave = (el: Element, done: any) => {
    gsap.to(el, {
        opacity: 0,
        height: 0,
        stagger: 0.15,
        onComplete: done,
    });
};
</script>

<style>
.menu-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;

    width: 100%;
    padding: 20px 15px 30px 15px;
}

.menu-list__title {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    cursor: pointer;

    transition: all 0.3s;
}

.menu-list__title.isExpanded,
.menu-list__title.router-link-exact-active {
    background-color: var(--main-color);
    color: var(--text-btn-color);
}

.menu-list__title .menu-list__title-text {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
}

.menu-list__title .menu-list__title-chevron {
    transition: transform 0.3s;
    width: 40%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;

    padding: 10px 15px 10px 0;

    opacity: 0;
    transition: opacity 0.3s;
}

#menu:hover .menu-list__title .menu-list__title-chevron {
    opacity: 1;
}

.menu-list__title.isExpanded .menu-list__title-chevron {
    transform: scaleY(-1);
}

/* ================= List Container ================= */
.menu-list__items-container {
    opacity: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;

    padding: 0;
    transition: opacity 0.3s;
}

#menu:hover .menu-list__items-container {
    opacity: 1;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
