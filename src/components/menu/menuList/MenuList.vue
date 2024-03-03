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
                @click="ToggleExpansion"
            >
                expand_more
            </i>
        </div>

        <ul class="menu-list__items-container">
            <TransitionGroup
                name="menu-list__items-container"
                @before-enter="BeforeEnter"
                @enter="Enter"
                @leave="Leave"
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

const ToggleExpansion = () => {
    isExpanded.value = !isExpanded.value;
};

const isConnected = ref(true);
const lists = ref<Array<{ id: number; name: string }>>([]);

// Exemple
lists.value = [
    { id: 1245, name: "List 1" },
    { id: 7534, name: "List 2" },
    { id: 1404, name: "List 3" },
    { id: 453, name: "List 4" },
    { id: 1421304, name: "List 5" },
    { id: 14404, name: "List 6" },
    { id: 1123404, name: "List 7" },
    { id: 51404, name: "List 8" },
    { id: 1412304, name: "List 9" },
    { id: 141204, name: "List 10" },
    { id: 145004, name: "List 11" },
    { id: 1477804, name: "List 12" },
    { id: 1417804, name: "List 13" },
    { id: 1784404, name: "List 14" },
    { id: 14604, name: "List 15" },
    { id: 691404, name: "List 16" },
    { id: 147704, name: "List 17" },
    { id: 1445604, name: "List 18" },
    { id: 11234074, name: "List 19" },
    { id: 1412304, name: "List 20" },
    { id: 14576404, name: "List 21" },
    { id: 14804, name: "List 22" },
    { id: 140784, name: "List 23" },
    { id: 140784, name: "List 24" },
    { id: 149784, name: "List 25" },
    { id: 14704, name: "List 26" },
    { id: 17404, name: "List 27" },
    { id: 140444, name: "List 28" },
    { id: 14704, name: "List 29" },
    { id: 158404, name: "List 30" },
];

const BeforeEnter = (el: Element) => {
    gsap.set(el, { opacity: 0, height: 0 });
};

const Enter = (el: Element, done: any) => {
    gsap.to(el, {
        opacity: 1,
        height: "1.6em",
        stagger: 0.15,
        onComplete: done,
    });
};

const Leave = (el: Element, done: any) => {
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
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    cursor: pointer;

    transition: all 0.3s;
}

.menu-list__title.isExpanded,
.menu-list__title.router-link-exact-active {
    background: var(--main-color);
    background-size: 150% auto;
    transition: 0.5s;
    color: var(--text-btn-color);
}

.menu-list__title.isExpanded:hover,
.menu-list__title.router-link-exact-active:hover {
    background-position: right center;
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

.menu-list__title.isExpanded .menu-list__title-chevron {
    transform: scaleY(-1);
}

/* ================= List Container ================= */
.menu-list__items-container {
    opacity: 0;
    width: 100%;
    height: 100%;
    max-height: 380px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;

    padding: 0;
    transition: opacity 0.3s;
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
