import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyACu3nTjzuj6hwUnEXg65UM_A9GL1aZz6E",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    "backlog-vault.firebaseapp.com",
  projectId:
    import.meta.env.VITE_FIREBASE_PROJECT_ID ||
    "backlog-vault",
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "backlog-vault.firebasestorage.app",
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ||
    "355520257238",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    "1:355520257238:web:24383f6b6feb8709237d77",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
