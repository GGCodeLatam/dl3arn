import { doc, getDoc } from "firebase/firestore";
import { APIGetVideoById } from "utils/types/video";
import { videosCollection } from "./collections";

async function getVideo(id: string): Promise<Partial<APIGetVideoById> | null> {
  const snapshot = await getDoc(doc(videosCollection, id));
  const data = snapshot.data();
  const video = { id: snapshot.id, ...data };

  return video;
}

export default getVideo;
