<template>
    <div>
        <h1>Settings Page</h1>

        <!-- Affichage des informations de connexion -->
        <div v-if="authStore.IsLoggedIn">
            <p>Connecté en tant que {{ authStore.currentUser?.displayName }}</p>
            <button @click="authStore.SignOut()">Déconnexion</button>
        </div>
        <div v-else>
            <p>Non connecté</p>
            <button @click="authStore.SignIn()">Connexion</button>
        </div>

        <!-- Affichage des paramètres de l'utilisateur -->
        <div v-if="authStore.IsLoggedIn">
            <h2>Paramètres de l'utilisateur</h2>
            <p>Thème: {{ settingsStore.userSettings?.theme }}</p>
            <p>Langue: {{ settingsStore.userSettings?.language }}</p>
            <p>
                Notifications activées:
                {{ settingsStore.userSettings?.notificationEnabled }}
            </p>

            <!-- Formulaire pour modifier les paramètres de l'utilisateur -->
            <h2>Modifier les paramètres</h2>
            <form @submit.prevent="updateUserSettings">
                <label for="theme">Thème:</label>
                <input type="text" id="theme" v-model="newTheme" />
                <br />
                <label for="language">Langue:</label>
                <input type="text" id="language" v-model="newLanguage" />
                <br />
                <label for="notificationEnabled">Notifications activées:</label>
                <input
                    type="checkbox"
                    id="notificationEnabled"
                    v-model="newNotificationEnabled"
                />
                <br />
                <button type="submit">Enregistrer</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import useSettingsStore from "@/stores/useSettingsStore";
import useAuthStore from "@/stores/useAuthStore";
import Settings from "@/models/Settings";
import { ref } from "vue";

const authStore = useAuthStore();
const settingsStore = useSettingsStore();

// Variables réactives pour stocker les nouvelles valeurs des paramètres
const newTheme = ref<string>("");
const newLanguage = ref<string>("");
const newNotificationEnabled = ref<boolean>(false);

// Fonction pour mettre à jour les paramètres de l'utilisateur
const updateUserSettings = () => {
    if (authStore.IsLoggedIn) {
        const updatedSettings = new Settings(
            newTheme.value || settingsStore.userSettings.theme,
            newLanguage.value || settingsStore.userSettings.language,
            newNotificationEnabled.value ||
                settingsStore.userSettings.notificationEnabled
        );

        settingsStore.updateUserSettings(updatedSettings);
    }
};
</script>
