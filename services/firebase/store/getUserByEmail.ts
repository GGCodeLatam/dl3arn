import { doc, getDoc } from "firebase/firestore";
import { UserModel } from "utils/types/firebase";
import { db } from "..";

async function getUserByEmail(email: string) {
  try {
    if (!email) return null;

    const userRef = await getDoc(doc(db, "users", email));
    const userData = userRef.data() as UserModel;
    if (!userData) return null;
    return userData;
  } catch (e: any) {
    console.log(e);
    return null;
  }
}

export default getUserByEmail;
