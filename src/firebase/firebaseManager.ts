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
    browserSessionPersistence,
} from "firebase/auth";

class FirebaseManager {
    private app: FirebaseApp;
    private firestore: Firestore;
    private provider: GoogleAuthProvider;
    private auth: Auth;
    private credential: OAuthCredential | null = null;
    private token: string | null = null;
    private user: User | null = null;

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
        });
    }

    public async SignInWithGoogle(): Promise<User | null> {
        try {
            const result = await signInWithPopup(this.auth, this.provider);
            this.credential = GoogleAuthProvider.credentialFromResult(result);
            const token = this.credential?.accessToken;
            this.user = result.user;
            console.log(getAdditionalUserInfo(result));
            return this.user;
        } catch (error) {
            console.error("Error signing in with Google:", error);
            return null;
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
}

export default FirebaseManager;
