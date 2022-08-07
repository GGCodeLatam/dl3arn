import { doc, getDoc } from "firebase/firestore";
import { APIGetCourseById } from "utils/types/course";
import { CourseModel, VideoModel } from "utils/types/firebase";
import getVideosDuration from "utils/youtube";
import { db } from "..";

async function getCourse(id: string): Promise<APIGetCourseById> {
  const ref = await getDoc(doc(db, "courses", id));

  const course = { id: ref.id, ...ref.data() } as CourseModel;
  const videos = await Promise.all(
    course.videos.map(async (_id) => {
      const ref = await getDoc(doc(db, "videos", _id));
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

  return parsed_course;
}

export default getCourse;
