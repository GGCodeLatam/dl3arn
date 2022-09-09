import { getDocs, query, where } from "firebase/firestore";
import { APIGetCourseById } from "utils/types/course";
import { CourseModel, VideoModel } from "utils/types/firebase";
import { VideoSafeProps } from "utils/types/video";
import { addDurationToVideos } from "utils/youtube";
import { getImage } from "../storage";
import { coursesCollection } from "./collections";
import getVideo from "./getVideo";

async function getCourseDetails(id: string): Promise<APIGetCourseById | null> {
  try {
    const q = query(coursesCollection, where("url", "==", id));
    const qsnap = await getDocs(q);
    const course = {
      id: qsnap.docs[0].id,
      ...qsnap.docs[0].data(),
    } as CourseModel;

    const image = (await getImage(course.image)) || "";

    if (!course.sections) return { ...course, image, sections: [] };

    if (Array.isArray(course.sections)) {
      const ids = course.sections.map((id) => id);

      const videos = await Promise.all(ids.map(getVideo));

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

      return { ...course, image, sections: sanitized };
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

    return { ...course, image, sections };
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default getCourseDetails;
