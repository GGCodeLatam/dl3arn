import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "..";

export const getImage = async (img: string): Promise<string> => {
  return await getDownloadURL(ref(storage, `images/${img}`));
};
