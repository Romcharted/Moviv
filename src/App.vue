<template>
    <div>
        <button @click="showNotification">Afficher la notification</button>
        <notifications />
    </div>
</template>

<script setup lang="ts">
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

const showNotification = () => {
    notify({
        title: "Notification",
        text: "Ceci est un exemple de notification.",
        type: "success",
    });
};
</script>

<style scoped>
/* Vos styles CSS ici */
</style>
