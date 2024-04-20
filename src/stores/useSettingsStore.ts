import { defineStore } from "pinia";
import firebaseManagerInstance from "@/firebase/firebaseManagerInstance";
import Settings from "@/models/Settings";

interface SettingsState {
    userSettingsData: Settings;
}

const useSettingsStore = defineStore({
    id: "settings",
    state: (): SettingsState => ({
        userSettingsData: new Settings("light-theme", "en", false),
    }),
    getters: {
        userSettings: (state): Settings => state.userSettingsData,
    },
    actions: {
        async fetchUserSettings(this): Promise<void> {
            try {
                const user = firebaseManagerInstance.GetUser();
                if (user) {
                    const settings =
                        await firebaseManagerInstance.GetUserSettings();
                    this.userSettingsData = settings;
                }
            } catch (error) {
                console.error("Error fetching user settings:", error);
                throw error;
            }
        },
        async updateUserSettings(this, newSettings: Settings): Promise<void> {
            try {
                const user = firebaseManagerInstance.GetUser();
                if (user) {
                    await firebaseManagerInstance.SaveUserSettings(newSettings);
                    this.userSettingsData = newSettings;
                }
            } catch (error) {
                console.error("Error updating user settings:", error);
                throw error;
            }
        },
    },
});

firebaseManagerInstance.registerAuthStateChangedCallback(async (user: any) => {
    if (user) {
        const settings = await firebaseManagerInstance.GetUserSettings();
        useSettingsStore().userSettingsData = settings;
    } else {
        useSettingsStore().userSettingsData = new Settings(
            "light-theme",
            "en",
            false
        );
    }
});

export default useSettingsStore;
