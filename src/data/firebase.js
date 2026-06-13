import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACu3nTjzuj6hwUnEXg65UM_A9GL1aZz6E",
  authDomain: "backlog-vault.firebaseapp.com",
  projectId: "backlog-vault",
  storageBucket: "backlog-vault.firebasestorage.app",
  messagingSenderId: "355520257238",
  appId: "1:355520257238:web:24383f6b6feb8709237d77",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
