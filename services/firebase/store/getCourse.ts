import { doc, getDoc } from "firebase/firestore";
import { APIGetCourseById } from "utils/types/course";
import { CourseModel, Sections, VideoModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import { VideoSafeProps } from "utils/types/video";
import getVideosDuration from "utils/youtube";
import { db } from "..";
import getVideo from "./getVideo";

async function getCourse(id: string): Promise<APIGetCourseById> {
  const ref = await getDoc(doc(db, "courses", id));

  const course = { id: ref.id, ...ref.data() } as CourseModel;

  type ParsedSections = Override<
    Sections,
    { [key: string]: { position: number; videos: VideoSafeProps[] } }
  >;
  const newSections: ParsedSections = {};
  const videos: (VideoModel & { section: string })[] = [];

  await Promise.all(
    Object.entries(course.sections).map(async ([key, value]) => {
      console.log(value.videos);
      const sectionVideos = (await Promise.all(
        value.videos.map(getVideo)
      )) as VideoModel[];

      videos.push(
        ...sectionVideos.map((video) => ({
          ...video,
          section: key,
        }))
      );

      newSections[key] = {
        position: value.position,
        videos: sectionVideos.map((video) => ({
          id: video.id,
          name: video.name,
          free: video.free,
          duration: "",
        })),
      };
      return null;
    })
  );

  if (!videos.length) {
    Object.entries(course.sections).forEach(([section, value]) => {
      newSections[section] = { position: value.position, videos: [] };
    });

    return { ...course, sections: newSections };
  }

  const durations = await getVideosDuration(videos);

  durations.forEach((video) => {
    newSections[video.section] = {
      ...newSections[video.section],
      videos: newSections[video.section].videos.map((current) =>
        current.id === video.id
          ? { ...current, duration: video.duration }
          : current
      ),
    };
  });

  const parsed_course: APIGetCourseById = {
    ...course,
    sections: newSections,
  };

  return parsed_course;
}

export default getCourse;
