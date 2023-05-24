import { firebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Figure } from "../models/figure";

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const newImage = async (info: Partial<Figure>, file: File) => {
  const storagaRef = ref(storage, info.name);

  await uploadBytes(storagaRef, file);

  const imgUrl = await getDownloadURL(storagaRef);

  info.img = imgUrl;
};
