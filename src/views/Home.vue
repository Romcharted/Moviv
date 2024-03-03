<template>
    <HomeComponent />

    <!-- <div>
        <div v-if="authStore.IsLoggedIn">
            <p>Connecté en tant que {{ authStore.currentUser?.displayName }}</p>
            <button @click="authStore.SignOut()">Déconnexion</button>
        </div>
        <div v-else>
            <p>Non connecté</p>
            <button @click="authStore.SignIn()">Connexion</button>
        </div>
    </div> -->
</template>

<script setup lang="ts">
import UseAuthStore from "@/stores/useAuthStore";
import HomeComponent from "@/components/home/HomeComponent.vue";

const authStore = UseAuthStore();
</script>
