import { defineStore } from "pinia";
import firebaseManagerInstance from "@/firebase/firebaseManagerInstance";
import Settings from "@/models/Settings";
import i18n from "@/i18n";

interface SettingsState {
    userSettingsData: any;
}

const useSettingsStore = defineStore({
    id: "settings",
    state: (): SettingsState => ({
        userSettingsData: null,
    }),
    getters: {
        userSettings: (state): Settings | null => state.userSettingsData,
    },
    actions: {
        async updateLocale(newLocale: string): Promise<void> {
            if (newLocale === "fr" || newLocale === "en") {
                i18n.global.locale.value = newLocale;
            }
        },

        async fetchUserSettings(): Promise<void> {
            try {
                const user = firebaseManagerInstance.GetUser();
                if (user) {
                    const settings =
                        await firebaseManagerInstance.GetUserSettings();
                    this.userSettingsData = settings;
                    await this.updateLocale(settings.language);
                }
            } catch (error) {
                console.error("Error fetching user settings:", error);
                throw error;
            }
        },

        async updateUserSettings(newSettings: Settings): Promise<void> {
            try {
                const user = firebaseManagerInstance.GetUser();
                if (user) {
                    await firebaseManagerInstance.SaveUserSettings(newSettings);
                    this.userSettingsData = newSettings;
                    await this.updateLocale(newSettings.language);
                }
            } catch (error) {
                console.error("Error updating user settings:", error);
                throw error;
            }
        },
    },
});

firebaseManagerInstance.registerAuthStateChangedCallback(async (user: any) => {
    const settingsStore = useSettingsStore(); // Stocker une référence locale au store

    if (user) {
        const settings = await firebaseManagerInstance.GetUserSettings();
        settingsStore.userSettingsData = settings;

        if (
            settingsStore.userSettingsData !== null &&
            settingsStore.userSettingsData !== undefined
        ) {
            await settingsStore.updateLocale(
                settingsStore.userSettingsData.language
            );
        }
    } else {
        settingsStore.userSettingsData = null;
    }
});

export default useSettingsStore;
