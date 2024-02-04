<template>
    <div class="menu-list">
        <div
            class="menu-list__title"
            @click="toggleExpansion"
            :class="{ isExpanded: isExpanded }"
        >
            <div>
                <i class="material-icons-outlined"> bookmarks </i>
                <span>{{ $t("menu.my-list") }}</span>
            </div>
            <i class="material-icons-outlined menu-list__title-chevron">
                expand_more
            </i>
        </div>

        <div class="menu-list__items-container">
            <template v-if="isConnected">
                <MenuListItem
                    v-for="(list, index) in lists"
                    :key="list.id"
                    :name="list.name"
                    :link="list.link"
                    :isFirst="index === 0"
                />
            </template>
            <template v-else>
                <MenuListItem
                    :name="$t('menu.connect')"
                    link="LogIn"
                    isFirst="true"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MenuListItem from "./MenuListItem.vue";

const isExpanded = ref(false);

const toggleExpansion = () => {
    isExpanded.value = !isExpanded.value;
};

const isConnected = ref(false);
const lists = ref<Array<{ id: number; name: string; link: string }>>([]);

// Exemple
lists.value = [
    { id: 1, name: "List 1", link: "#" },
    { id: 2, name: "List 2", link: "#" },
    { id: 3, name: "List 3", link: "#" },
];
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
    padding: 10px 15px;
    border-radius: var(--border-radius);
    cursor: pointer;

    transition: all 0.3s;
}

.menu-list__title.isExpanded {
    background-color: var(--main-color);
    color: var(--text-btn-color);
}

.menu-list__title div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
}

.menu-list__title .menu-list__title-chevron {
    transition: transform 0.3s;
}

.menu-list__title.isExpanded .menu-list__title-chevron {
    transform: scaleY(-1);
}

/* ================= List Container ================= */
.menu-list__items-container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}
</style>
