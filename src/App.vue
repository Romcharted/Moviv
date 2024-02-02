<template>
    <div>
        <notifications />

        <Menu />

        <!-- <button @click="showNotification">Afficher la notification</button> -->
    </div>
</template>

<script setup lang="ts">
import { useNotification } from "@kyvg/vue3-notification";
import Menu from "@/components/menu/Menu.vue";
/* 
const { notify } = useNotification();

const showNotification = () => {
    notify({
        title: "Notification",
        text: "Ceci est un exemple de notification.",
        type: "success",
    });
}; */
</script>
