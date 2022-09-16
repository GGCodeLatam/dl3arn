import { getDocs, orderBy, query, where } from "firebase/firestore";
import { coursesCollection } from "./collections";

async function getCoursesByCategory(category: string) {
  const q = query(
    coursesCollection,
    orderBy("created_at", "desc"),
    where("categories", "array-contains", category)
  );
  const coursesRef = await getDocs(q);

  const courses = coursesRef.docs.map((snap) => ({
    id: snap.id,
    ...snap.data(),
  }));

  return courses;
}

export default getCoursesByCategory;
