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

        <!-- Affichage du formulaire de modification des paramètres de l'utilisateur -->
        <div v-if="authStore.IsLoggedIn">
            <h2>Modifier les paramètres</h2>
            <form @submit.prevent="updateUserSettings">
                <label for="theme">Thème:</label>
                <input type="checkbox" id="theme" v-model="darkThemeEnabled" />
                <br />
                <label for="language">Langue:</label>
                <select v-model="selectedLanguage">
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                </select>
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
import i18n from "@/i18n";
import { ref, watch } from "vue";

const authStore = useAuthStore();
const settingsStore = useSettingsStore();

const darkThemeEnabled = ref<boolean>(false);
const selectedLanguage = ref<string>(i18n.global.locale.value);
const newNotificationEnabled = ref<boolean>(false);

// Observe les changements de settingsStore.userSettings
watch(
    () => settingsStore.userSettings,
    (newValue) => {
        if (newValue) {
            darkThemeEnabled.value = newValue.theme === "dark-theme";
            selectedLanguage.value = newValue.language;
            newNotificationEnabled.value = newValue.notificationEnabled;
        } else {
            darkThemeEnabled.value = false;
            selectedLanguage.value = i18n.global.locale.value;
            newNotificationEnabled.value = false;
        }
    },
    { immediate: true } // immediate: true pour exécuter la fonction de veille dès le début
);

// Fonction pour mettre à jour les paramètres de l'utilisateur
const updateUserSettings = () => {
    if (authStore.IsLoggedIn) {
        const updatedSettings = new Settings(
            darkThemeEnabled.value ? "dark-theme" : "light-theme",
            selectedLanguage.value,
            newNotificationEnabled.value ||
                settingsStore.userSettings.notificationEnabled
        );

        settingsStore.updateUserSettings(updatedSettings);
    }
};
</script>
