import { db } from "./firebaseConfig";
import { 
  collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc 
} from "firebase/firestore";

// Neue Uhr anlegen
export async function addWatch(userId, watchId, watchData) {
  return setDoc(doc(db, "watches", watchId), {
    userId,
    ...watchData,
  });
}

// Uhr auslesen
export async function getWatch(watchId) {
  return getDoc(doc(db, "watches", watchId));
}

// Alle Uhren eines Users
export async function getUserWatches(userId) {
  const snapshot = await getDocs(collection(db, "watches"));
  return snapshot.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((item) => item.userId === userId);
}

// Uhr aktualisieren
export async function updateWatch(watchId, updateData) {
  return updateDoc(doc(db, "watches", watchId), updateData);
}

// Uhr löschen
export async function deleteWatch(watchId) {
  return deleteDoc(doc(db, "watches", watchId));
}
