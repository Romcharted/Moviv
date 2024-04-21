<template>
    <div class="settings">
        <div class="settings-container">
            <h1>Settings Page</h1>

            <!-- Affichage des informations de connexion -->
            <div v-if="authStore.IsLoggedIn" class="settings-auth">
                <p>
                    Connecté en tant que
                    {{ authStore.currentUser?.displayName }}
                </p>
                <button @click="authStore.SignOut()">Déconnexion</button>
            </div>
            <div v-else>
                <p>Non connecté</p>
                <button @click="authStore.SignIn()">Connexion</button>
            </div>

            <!-- Affichage du formulaire de modification des paramètres de l'utilisateur -->
            <div v-if="authStore.IsLoggedIn" class="settings-form_container">
                <h2>Modifier les paramètres</h2>
                <form @submit.prevent="updateUserSettings">
                    <div class="form-group">
                        <label for="theme">Thème:</label>
                        <input
                            type="checkbox"
                            id="theme"
                            v-model="darkThemeEnabled"
                        />
                    </div>
                    <div class="form-group">
                        <label for="language">Langue:</label>
                        <select v-model="selectedLanguage">
                            <option value="fr">Français</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="notificationEnabled"
                            >Notifications activées:</label
                        >
                        <input
                            type="checkbox"
                            id="notificationEnabled"
                            v-model="newNotificationEnabled"
                        />
                    </div>
                    <button type="submit">Enregistrer</button>
                </form>
            </div>
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

<style>
.settings {
    padding: 80px 5%;
}

.settings-container {
    border: 1px solid var(--text-color);
    border-radius: 10px;
    background-color: var(--secondary-color);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.settings-auth {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.settings-form_container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.settings-form_container form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.settings-form_container form label {
    padding-right: 10px;
    margin-top: 10px;
}

@media screen and (max-width: 764px) {
}
</style>
