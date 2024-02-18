import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import {
    GoogleAuthProvider,
    getAuth,
    Auth,
    signInWithPopup,
    OAuthCredential,
    User,
    getAdditionalUserInfo,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence,
} from "firebase/auth";

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
}

export default FirebaseManager;
