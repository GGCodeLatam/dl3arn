import { doc, getDoc } from "firebase/firestore";
import { CourseModel } from "utils/types/firebase";
import { db } from ".";
import { getImage } from "./storage";

async function getCourse(id: string): Promise<CourseModel | null> {
  const ref = await getDoc(doc(db, "courses", id));
  const course = { id: ref.id, ...ref.data() } as CourseModel;

  const image = await getImage(course.image);

  const parsed = {
    ...course,
    image: image || "",
  };

  return parsed;
}

export default getCourse;
