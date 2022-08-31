import {
  collection,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";
import { CourseModel, VideoModel } from "utils/types/firebase";
import { db } from "..";

const collectionFactory = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export const coursesCollection =
  collectionFactory<Omit<CourseModel, "id">>("courses");
export const videosCollection =
  collectionFactory<Omit<VideoModel, "id">>("videos");
export const dl3arnCollection = collection(db, "dl3arn");
