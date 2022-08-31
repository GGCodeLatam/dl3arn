import { doc, getDoc } from "firebase/firestore";
import { db } from "..";

async function getDl3arn(id: string): Promise<any> {
  const ref = await getDoc(doc(db, "dl3arn", id));
  const data = ref.data();
  if (!data) return [];
  return data;
}

export default getDl3arn;
