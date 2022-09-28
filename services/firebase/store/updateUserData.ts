import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import { auth, db, storage } from "..";
import getUserData from "./getUserData";

type Update = Override<
  Omit<UserModel, "role">,
  { avatar?: File | null | string }
>;
interface Props {
  update: Partial<Update>;
}
async function updateUserData({
  update: { avatar, bio, contracts, name },
}: Props) {
  if (!auth.currentUser?.email) return null;
  const current = await getUserData(auth.currentUser);
  if (!current || !auth.currentUser?.email) return null;
  const updatedData: Partial<UserModel> = { ...current } as Partial<UserModel>;

  if (avatar && typeof avatar !== "string") {
    const storageRef = ref(
      storage,
      `images/users/${auth.currentUser.email}/avatar`
    );
    const avatarRef = await uploadBytes(storageRef, avatar);
    const imgUrl = await getDownloadURL(avatarRef.ref);
    updatedData.avatar = imgUrl;
  }
  if (avatar && typeof avatar === "string") updatedData.avatar = avatar;
  if (!avatar && auth.currentUser?.photoURL)
    updatedData.avatar = auth.currentUser?.photoURL;

  /**
   * Name
   **/
  if (name) updatedData.name = name;
  else updatedData.name = auth.currentUser?.displayName || "";

  /**
   * Bio
   **/
  if (bio) updatedData.bio = bio;
  else updatedData.bio = current.bio || "";

  /**
   * Contracts
   **/
  if (contracts) updatedData.contracts = contracts;
  else updatedData.contracts = current.contracts || [];

  await setDoc(doc(db, "users", auth.currentUser.email), updatedData, {
    merge: true,
  });

  return updatedData;
}

export default updateUserData;
