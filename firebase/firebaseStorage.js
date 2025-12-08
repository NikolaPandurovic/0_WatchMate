import { storage } from "./firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Profilbild hochladen
export async function uploadAvatar(userId, file) {
  const storageRef = ref(storage, `avatars/${userId}/profile.png`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

// Watch-Bild hochladen
export async function uploadWatchImage(watchId, file) {
  const storageRef = ref(storage, `watches/${watchId}/${file.name}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}
