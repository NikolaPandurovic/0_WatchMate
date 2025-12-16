// firebase/firebaseAuth.js
import {
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { app } from "./firebaseConfig";

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export async function registerUser(fullName, email, password) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(res.user, { displayName: fullName });
}

export async function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
