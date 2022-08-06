import { doc, getDoc } from "firebase/firestore";
import { videosCollection } from "./collections";

const getById = async (id: string) => doc(videosCollection, id);

async function getVideo(id: string) {
  const res = await getDoc(doc(videosCollection, id));
  const data = res.data();

  if (!data || typeof data === "string") return null;

  return { uid: res.id, ...data };
}

export default getVideo;
