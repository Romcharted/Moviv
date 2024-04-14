import { defineStore } from "pinia";
import FirebaseManager from "@/firebase/firebaseManager";
import { User } from "firebase/auth";
import firebaseManagerInstance from "@/firebase/firebaseManagerInstance";

interface AuthState {
    currentUser: User | null;
}

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
            await firebaseManagerInstance.SignInWithGoogle();
        },
        async SignOut(this): Promise<void> {
            await firebaseManagerInstance.SignOut();
            this.currentUser = null;
        },
        SetUser(user: User | null): void {
            this.currentUser = user;
        },
    },
});

// Enregistre un callback pour mettre à jour l'utilisateur authentifié
firebaseManagerInstance.registerAuthStateChangedCallback((user) => {
    UseAuthStore().currentUser = user;
});

export default UseAuthStore;
