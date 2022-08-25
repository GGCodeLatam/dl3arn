import { doc, getDoc } from "firebase/firestore";
import { CourseModel } from "utils/types/firebase";
import { db } from "..";

async function getCoursesByIds(ids: string[]) {
  const snapshots = await Promise.all(
    ids.map((id) => getDoc(doc(db, "courses", id)))
  );

  const courses: CourseModel[] = [];
  snapshots.forEach((snap) => {
    const course = snap.data();
    courses.push({ id: snap.id, ...course } as CourseModel);
  });

  return courses;
}

export default getCoursesByIds;
