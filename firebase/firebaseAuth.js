import { auth } from "./firebaseConfig";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from "firebase/auth";

// Benutzer registrieren
export async function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Benutzer einloggen
export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Benutzer ausloggen
export async function logout() {
  return signOut(auth);
}
