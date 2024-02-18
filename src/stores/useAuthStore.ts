import { defineStore } from "pinia";
import FirebaseManager from "@/firebase/firebaseManager";
import { User } from "firebase/auth";

interface AuthState {
    currentUser: User | null;
}

const firebaseManager = new FirebaseManager();

const useAuthStore = defineStore({
    id: "firebaseManager",
    state: (): AuthState => ({
        currentUser: null,
    }),
    getters: {
        IsLoggedIn: (state): boolean => state.currentUser !== null,
        CurrentUser: (state): User | null => state.currentUser,
    },
    actions: {
        async SignIn(this): Promise<void> {
            await firebaseManager.SignInWithGoogle();
        },
        async SignOut(this): Promise<void> {
            await firebaseManager.SignOut();
            this.currentUser = null;
        },
        SetUser(user: User | null): void {
            this.currentUser = user;
        },
    },
});

// Enregistrer un callback pour mettre à jour l'utilisateur authentifié
firebaseManager.registerAuthStateChangedCallback((user) => {
    useAuthStore().currentUser = user;
});

export default useAuthStore;
