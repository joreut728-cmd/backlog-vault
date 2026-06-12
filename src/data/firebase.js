import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "DEIN_KEY",
  authDomain: "DEIN_DOMAIN",
  projectId: "DEIN_ID",
  storageBucket: "DEIN_BUCKET",
  messagingSenderId: "DEIN_SENDER",
  appId: "DEIN_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
