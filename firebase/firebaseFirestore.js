import { db } from "./firebaseConfig";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

// ➕ ADD WATCH
export async function addWatch(userId, watchId, watchData) {
  return setDoc(
    doc(db, "users", userId, "watches", watchId),
    {
      ...watchData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }
  );
}

// 📄 GET ONE WATCH
export async function getWatch(userId, watchId) {
  return getDoc(doc(db, "users", userId, "watches", watchId));
}

// 📂 GET ALL WATCHES OF USER
export async function getUserWatches(userId) {
  const snapshot = await getDocs(
    collection(db, "users", userId, "watches")
  );

  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
}

// ✏️ UPDATE WATCH
export async function updateWatch(userId, watchId, updateData) {
  return updateDoc(
    doc(db, "users", userId, "watches", watchId),
    {
      ...updateData,
      updatedAt: serverTimestamp(),
    }
  );
}

// 🗑️ DELETE WATCH
export async function deleteWatch(userId, watchId) {
  return deleteDoc(
    doc(db, "users", userId, "watches", watchId)
  );
}
