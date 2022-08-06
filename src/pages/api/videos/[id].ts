import { DocumentData, CollectionReference } from "firebase-admin/firestore";
import { db } from "services/firebase/admin";
import { APIHandler, API_ERRORS } from "utils/types/api";
import { VideoModel } from "utils/types/firebase";
import { APIGetVideoById } from "utils/types/video";

const collectionFactory = <T = DocumentData>(collection: string) =>
  db.collection(collection) as CollectionReference<T>;

const videosCollection = collectionFactory<VideoModel>("videos");

interface CustomRequest {
  query: {
    id: string;
  };
}

type Handler = APIHandler<CustomRequest, APIGetVideoById>;
const handler: Handler = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id)
      return res.status(400).json({
        data: null,
        error: { message: "Video not found", code: API_ERRORS.VIDEO_NOT_FOUND },
        success: false,
      });

    const ref = videosCollection.doc(id);
    const snapshot = await ref.get();
    const video = { id: ref.id, ...snapshot.data() };

    return res.json({ data: video, error: null, success: true });
  } catch (e: any) {
    return res.json({ data: null, error: e, success: false });
  }
};

export default handler;
