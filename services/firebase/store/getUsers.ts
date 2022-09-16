import { getDocs, orderBy, query } from "firebase/firestore";
import { UserModel } from "utils/types/firebase";
import { usersCollection } from "./collections";

const q = query(usersCollection, orderBy("email", "desc"));

async function getUsers() {
  const usersRef = await getDocs(q);
  const users = usersRef.docs.map((user) => user.data() as UserModel);
  return users;
}

export default getUsers;
