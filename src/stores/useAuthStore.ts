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
            this.currentUser = await firebaseManager.SignInWithGoogle();
        },
        async SignOut(this): Promise<void> {
            await firebaseManager.SignOut();
            this.currentUser = null;
        },
    },
});

export default useAuthStore;
