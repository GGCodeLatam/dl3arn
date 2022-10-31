import { getDocs, query, where } from "firebase/firestore";
import { usersCollection } from "./collections";

async function getUsersByEmail(emails: string[]) {
  if (!emails?.length) return [];
  const q = query(usersCollection, where("email", "in", emails));

  const usersRef = await getDocs(q);
  return usersRef.docs.map((snap) => snap.data());
}

export default getUsersByEmail;
