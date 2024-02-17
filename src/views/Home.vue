<template>
    <div>
        <div v-if="authStore.IsLoggedIn">
            <p>Connecté en tant que {{ authStore.currentUser?.displayName }}</p>
            <button @click="authStore.SignOut()">Déconnexion</button>
        </div>
        <div v-else>
            <p>Non connecté</p>
            <button @click="authStore.SignIn()">Connexion</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import useAuthStore from "@/stores/useAuthStore";

const authStore = useAuthStore();
</script>
