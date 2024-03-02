import { defineStore } from "pinia";
import FirebaseManager from "@/firebase/firebaseManager";
import { User } from "firebase/auth";

interface AuthState {
    currentUser: User | null;
}

const firebaseManager = new FirebaseManager();

// Mise en place du store
const UseAuthStore = defineStore({
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

// Enregistre un callback pour mettre à jour l'utilisateur authentifié
firebaseManager.registerAuthStateChangedCallback((user) => {
    UseAuthStore().currentUser = user;
});

export default UseAuthStore;
