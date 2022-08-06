import { NextApiRequest, NextApiResponse } from "next";
import { db } from "services/firebase/admin";
import { APIGetCourses } from "utils/types/course";
import { CourseModel } from "utils/types/firebase";

type Handler = (
  req: NextApiRequest,
  res: NextApiResponse<APIGetCourses[] | null>
) => Promise<any>;

const handler: Handler = async (_, res) => {
  try {
    const snapshot = await db
      .collection("courses")
      .limit(6)
      .orderBy("score", "desc")
      .get();

    const courses: CourseModel[] = [];
    snapshot.forEach((snap) => {
      const course = snap.data();
      courses.push({ id: snap.id, ...course } as CourseModel);
    });

    return res.json(courses);
  } catch (e) {
    return res.json([]);
  }
};

export default handler;
