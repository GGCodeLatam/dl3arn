import { getDocs, orderBy, query } from "firebase/firestore";
import { CourseModel } from "utils/types/firebase";
import { coursesCollection } from "./collections";

const q = query(coursesCollection, orderBy("created_at", "desc"));

async function getCourses() {
  const snapshots = await getDocs(q);

  const courses: CourseModel[] = [];
  snapshots.forEach((snap) => {
    const course = snap.data();
    courses.push({ id: snap.id, ...course } as CourseModel);
  });

  return courses;
}

export default getCourses;
