<template>
    <div class="add-list-btn" :class="{ active: props.active }">
        <i class="material-icons-outlined"> check </i>
    </div>
</template>

<script setup lang="ts">
import { onMounted, defineProps } from "vue";

const props = defineProps<{
    active: boolean;
    idMovie: number;
}>();

onMounted(() => {});
</script>

<style>
.add-list-btn {
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 35px;
    z-index: 2;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.add-list-btn::before {
    content: "";
    width: 100%;
    height: 100%;
    background: var(--text-color);
    opacity: 0.3;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    clip-path: polygon(100% 0, 100% 100%, 50% 75%, 0 100%, 0 0);
    transition: 0.3s;
}

.add-list-btn:hover::before {
    opacity: 1;
}

.add-list-btn.active::before {
    z-index: 3;
    background: var(--main-color);
    opacity: 1;
}

.add-list-btn i {
    color: var(--text-color-light);
    font-size: 24px;
    font-size: 26px;
    margin-top: -14px;
    z-index: 10;
}

.add-list-btn:hover i {
    color: var(--text-btn-color);
}

.add-list-btn.active i {
    color: var(--text-color-light) !important;
}
</style>
