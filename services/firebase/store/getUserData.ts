import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserModel } from "utils/types/firebase";
import { db } from "..";

function createUserData({ email, photoURL, displayName }: User) {
  if (!email) return null;
  const user: UserModel = {
    name: displayName,
    email,
    avatar: photoURL,
    role: "user",
  };
  setDoc(doc(db, "users", email), user);
  return user;
}

async function getUserData(user: User | string) {
  try {
    if (!user) return null;
    if (typeof user === "string") {
      const userRef = await getDoc(doc(db, "users", user));
      const userData = userRef.data() as UserModel;
      return userData;
    }

    if (!user.email) return null;
    const userRef = await getDoc(doc(db, "users", user.email));

    if (!userRef.data()) return createUserData(user);
    if (userRef.data() && !userRef.data()?.avatar && user.photoURL)
      return createUserData(user);

    const userData = userRef.data() as UserModel;
    return userData;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default getUserData;
