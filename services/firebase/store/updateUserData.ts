import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import { auth, db, storage } from "..";

type Update = Override<Omit<UserModel, "role">, { avatar?: File | null }>;
async function updateUserData(
  current: UserModel | null,
  { avatar }: Partial<Update>
) {
  if (!current || !avatar || !auth.currentUser?.email) return null;

  const updatedData: Partial<UserModel> = { ...current };

  if (avatar) {
    const storageRef = ref(storage, `${auth.currentUser.email}/avatar`);
    const avatarRef = await uploadBytes(storageRef, avatar);
    const imgUrl = await getDownloadURL(avatarRef.ref);
    updatedData.avatar = imgUrl;
  }

  await setDoc(doc(db, "users", auth.currentUser.email), updatedData, {
    merge: true,
  });

  return updatedData;
}

export default updateUserData;
