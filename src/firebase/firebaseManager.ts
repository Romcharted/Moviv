import { FirebaseApp, initializeApp } from "firebase/app";
import {
    Firestore,
    getFirestore,
    doc,
    setDoc,
    getDoc,
    collection,
    DocumentReference,
} from "firebase/firestore";
import {
    GoogleAuthProvider,
    getAuth,
    Auth,
    signInWithPopup,
    OAuthCredential,
    User,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence,
} from "firebase/auth";

import Settings from "@/models/Settings";

class FirebaseManager {
    private app: FirebaseApp;
    private firestore: Firestore;
    private provider: GoogleAuthProvider;
    private auth: Auth;
    private credential: OAuthCredential | null = null;
    private token: string | null = null;
    private user: User | null = null;

    private authStateChangedCallbacks: ((user: User | null) => void)[] = [];

    public GetApp(): FirebaseApp {
        return this.app;
    }

    public GetUser(): User | null {
        return this.user;
    }

    public constructor() {
        this.app = initializeApp({
            apiKey: import.meta.env.VITE_FIREBASE_APIKEY!,
            authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN!,
            projectId: import.meta.env.VITE_FIREBASE_PROJECTID!,
            storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET!,
            messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID!,
            appId: import.meta.env.VITE_FIREBASE_APPID!,
            measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID!,
        });

        this.firestore = getFirestore(this.app);
        this.provider = new GoogleAuthProvider();
        this.auth = getAuth(this.app);

        // Écouteur d'état d'authentification
        onAuthStateChanged(this.auth, (user) => {
            this.user = user;
            this.notifyAuthStateChanged(this.user);
        });
    }

    public async SignInWithGoogle(): Promise<void> {
        try {
            // Définir la persistance locale avant la connexion
            await setPersistence(this.auth, browserLocalPersistence);

            const result = await signInWithPopup(this.auth, this.provider);
            this.credential = GoogleAuthProvider.credentialFromResult(result);
            const token = this.credential?.accessToken;
            this.user = result.user;
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    }

    public async SignOut(): Promise<void> {
        try {
            await this.auth.signOut();
            this.user = null;
        } catch (error) {
            console.error("Error signing out:", error);
        }
    }

    public IsAuthenticated(): boolean {
        return this.user !== null;
    }

    // Méthode pour enregistrer les callbacks d'état d'authentification
    public registerAuthStateChangedCallback(
        callback: (user: User | null) => void
    ): void {
        this.authStateChangedCallbacks.push(callback);
    }

    // Méthode pour notifier tous les callbacks enregistrés
    private notifyAuthStateChanged(user: User | null): void {
        this.authStateChangedCallbacks.forEach((callback) => callback(user));
    }

    public async SaveUserSettings(settings: Settings): Promise<void> {
        try {
            const userSettingsRef = await this.getUserSettingsRef();
            await setDoc(userSettingsRef, settings.toJSON());
        } catch (error) {
            console.error("Error saving user settings:", error);
            throw error;
        }
    }

    public async GetUserSettings(): Promise<Settings> {
        try {
            const userSettingsRef = await this.getUserSettingsRef();
            const docSnapshot = await getDoc(userSettingsRef);

            if (docSnapshot.exists()) {
                return Settings.fromJSON(docSnapshot.data());
            } else {
                // Si le document des paramètres n'existe pas, retournez des paramètres par défaut
                return new Settings("light-theme", "en", false);
            }
        } catch (error) {
            console.error("Error getting user settings:", error);
            return new Settings("light-theme", "en", false);
        }
    }

    private async getUserSettingsRef(): Promise<DocumentReference> {
        if (this.user) {
            const userDocRef = doc(this.firestore, "users", this.user.uid);
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
                const settingsDocRef = doc(
                    collection(userDocRef, "settings"),
                    "userSettings"
                );
                return settingsDocRef;
            } else {
                await setDoc(userDocRef, {});
                const settingsDocRef = doc(
                    collection(userDocRef, "settings"),
                    "userSettings"
                );
                const defaultSettings = new Settings(
                    "light-theme",
                    "en",
                    false
                );
                await setDoc(settingsDocRef, defaultSettings.toJSON());
                return settingsDocRef;
            }
        } else {
            throw new Error("No user signed in.");
        }
    }
}

export default FirebaseManager;
