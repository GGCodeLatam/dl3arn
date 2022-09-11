import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserModel } from "utils/types/firebase";
import { db } from "..";

function createUserData(email: string) {
  const user: UserModel = { email, role: "user" };
  setDoc(doc(db, "users", email), user);
  return user;
}

async function getUserData(email?: string | null) {
  try {
    if (!email) return null;

    const userRef = await getDoc(doc(db, "users", email));
    if (!userRef.data()) return createUserData(email);

    const user = userRef.data() as UserModel;
    return user;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default getUserData;
