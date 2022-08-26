import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "..";

export const getImage = async (img: string): Promise<string | null> => {
  try {
    return await getDownloadURL(ref(storage, `images/${img}`));
  } catch (e) {
    return null;
  }
};
