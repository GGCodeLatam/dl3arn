import { db } from "services/firebase/admin";
import { APIHandler, API_ERRORS } from "utils/types/api";
import { APIGetCourseById } from "utils/types/course";
import { CourseModel, VideoModel } from "utils/types/firebase";
import getVideosDuration from "utils/youtube";

interface Request {
  query: {
    id: string;
  };
}

const handler: APIHandler<Request, APIGetCourseById> = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id)
      return res.status(404).json({
        data: null,
        success: false,
        error: {
          message: "Course not found",
          code: API_ERRORS.COURSE_NOT_FOUND,
        },
      });

    const ref = await db.collection("courses").doc(id).get();
    const course = { id: ref.id, ...ref.data() } as CourseModel;

    const videos = await Promise.all(
      course.videos.map(async (id) => {
        const ref = await db.collection("videos").doc(id).get();
        const data = ref.data() as Omit<VideoModel, "id">;

        return { id: ref.id, ...data };
      })
    );

    const durations = await getVideosDuration(
      videos.map(({ videoId, id }) => ({ videoId, id }))
    );

    const parsed_course: APIGetCourseById = {
      ...course,
      videos: videos.map((video) => ({
        id: video.id,
        free: video.free,
        name: video.name,
        duration: durations[video.videoId],
      })),
    };

    res.status(200).json({ data: parsed_course, error: null, success: true });
  } catch (e: any) {
    console.error(e);
    res.status(200).json({ data: null, error: e, success: true });
  }
};

export default handler;
