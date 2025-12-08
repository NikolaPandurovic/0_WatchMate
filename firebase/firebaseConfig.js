// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJyHDVv05CPzVM5BGWAcjvqmV0vBA4GXo",
  authDomain: "watchmate-561a2.firebaseapp.com",
  projectId: "watchmate-561a2",
  storageBucket: "watchmate-561a2.firebasestorage.app",
  messagingSenderId: "192760233298",
  appId: "1:192760233298:web:193896e098e522808cce8b",
  measurementId: "G-EKK2SE2NFE",
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);

// Firebase Dienste exportieren
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
