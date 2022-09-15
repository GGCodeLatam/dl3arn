import { getDocs, orderBy, query } from "firebase/firestore";
import { usersCollection } from "./collections";

const q = query(usersCollection, orderBy("email", "desc"));

async function getUsers() {
  const usersRef = await getDocs(q);
  const users = usersRef.docs.map((user) => user);
  return users;
}

export default getUsers;
