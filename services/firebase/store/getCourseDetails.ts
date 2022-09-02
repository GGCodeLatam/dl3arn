import { doc, getDoc } from "firebase/firestore";
import { APIGetCourseById } from "utils/types/course";
import { CourseModel, VideoModel } from "utils/types/firebase";
import { VideoSafeProps } from "utils/types/video";
import { addDurationToVideos } from "utils/youtube";
import { db } from "..";
import { getImage } from "../storage";
import getVideo from "./getVideo";

async function getCourseDetails(id: string): Promise<APIGetCourseById | null> {
  try {
    const courseRef = await getDoc(doc(db, "courses", id));
    const course = { id: courseRef.id, ...courseRef.data() } as CourseModel;

    if (Array.isArray(course.sections)) {
      const ids = course.sections.map((id) => id);

      const videos = await Promise.all(ids.map(getVideo));
      console.log(videos);

      const videosWithDuration = videos.length
        ? await addDurationToVideos(
            videos.filter((video) => !!video) as VideoModel[]
          )
        : [];
      const sanitized: Partial<VideoSafeProps>[] = videosWithDuration.map(
        (video) => ({
          id: video.id,
          free: video.free,
          name: video.name,
          duration: video.duration,
        })
      );

      return {
        ...course,
        image: (await getImage(course.image)) || "",
        sections: sanitized,
      };
    }

    const videos: (Partial<VideoSafeProps> & { section: string })[] = [];

    await Promise.all(
      Object.entries(course.sections).map(async ([name, data]) => {
        const _videos = await Promise.all(data.videos.map(getVideo));
        videos.push(..._videos.map((video) => ({ ...video, section: name })));
        return;
      })
    );

    const videosWithDuration = videos.length
      ? await addDurationToVideos<{ section: string }>(videos)
      : videos;
    const sections: {
      [key: string]: { position: number; videos: Partial<VideoSafeProps>[] };
    } = {};

    videosWithDuration.forEach((video) => {
      if (!video.section) return null;
      if (!sections[video.section])
        sections[video.section] = {
          position: course.sections[video.section].position,
          videos: [],
        };
      sections[video.section].videos.push({
        id: video.id,
        free: video.free,
        name: video.name,
        duration: video.duration,
      });
    });

    return { ...course, image: (await getImage(course.image)) || "", sections };
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default getCourseDetails;
