import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "..";

export const getImage = async (img: string): Promise<string> => {
  console.log(storage);
  return await getDownloadURL(ref(storage, `images/${img}`));
};
