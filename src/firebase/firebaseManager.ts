import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

class FirebaseManager {
    private app: FirebaseApp;
    private firebaseConfig: FirebaseConfig;
    private firestore: Firestore;

    public constructor() {
        this.firebaseConfig = {
            apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
            authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
            projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
            storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
            messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
            appId: import.meta.env.VITE_FIREBASE_APPID,
            measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
        };
        this.app = initializeApp(this.firebaseConfig);
        this.firestore = getFirestore(this.app);
    }

    public GetApp(): FirebaseApp {
        return this.app;
    }
}

export { FirebaseManager };
