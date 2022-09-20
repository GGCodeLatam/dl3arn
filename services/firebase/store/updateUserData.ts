import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import { auth, db, storage } from "..";

type Update = Override<
  Omit<UserModel, "role">,
  { avatar?: File | null | string }
>;
interface Props {
  current: UserModel | null;
  update: Partial<Update>;
}
async function updateUserData({
  current,
  update: { avatar, bio, name },
}: Props) {
  if (!current || !auth.currentUser?.email) return null;

  const updatedData: Partial<UserModel> = { ...current } as Partial<UserModel>;

  if (avatar && typeof avatar !== "string") {
    const storageRef = ref(storage, `${auth.currentUser.email}/avatar`);
    const avatarRef = await uploadBytes(storageRef, avatar);
    const imgUrl = await getDownloadURL(avatarRef.ref);
    updatedData.avatar = imgUrl;
  }
  if (avatar && typeof avatar === "string") updatedData.avatar = avatar;
  if (!avatar && auth.currentUser?.photoURL)
    updatedData.avatar = auth.currentUser?.photoURL;

  if (name) updatedData.name = name;
  else if (auth.currentUser?.displayName) updatedData.name = name;
  if (bio) updatedData.bio = bio;

  await setDoc(doc(db, "users", auth.currentUser.email), updatedData, {
    merge: true,
  });

  return updatedData;
}

export default updateUserData;