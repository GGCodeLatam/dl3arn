// per sections: X0c0XxCyO0Z9gdDzUyKd
// array de videos: LfJjfMcFOfx6uS3d81E5

import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
import { db } from "services/firebase";
import getVideo from "services/firebase/store/getVideo";
import { CourseModel, VideoModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import { VideoSafeProps } from "utils/types/video";
import { addDurationToVideos } from "utils/youtube";

type Course = Override<
  CourseModel,
  {
    sections:
      | {
          [key: string]: {
            position: number;
            videos: Partial<VideoSafeProps>[];
          };
        }
      | Partial<VideoSafeProps>[]
      | null;
  }
>;

interface Props {
  id: string;
}
function TestWithId({ id }: Props) {
  const [course, setCourse] = useState<Course | null>(null);
  useEffect(() => {
    const p = async () => {
      const courseRef = await getDoc(doc(db, "courses", id));
      const course = { id: courseRef.id, ...courseRef.data() } as CourseModel;

      if (!course.sections) return setCourse({ ...course, sections: null });
      if (Array.isArray(course.sections)) {
        const ids = course.sections.map((id) => id);
        const videos = await Promise.all(ids.map(getVideo));

        const videosWithDuration = await addDurationToVideos(
          videos.filter((video) => !!video) as VideoModel[]
        );
        const sanitized: Partial<VideoSafeProps>[] = videosWithDuration.map(
          (video) => ({
            id: video.id,
            free: video.free,
            name: video.name,
            duration: video.duration,
          })
        );

        return setCourse({ ...course, sections: sanitized });
      }

      const videos: (Partial<VideoSafeProps> & { section: string })[] = [];

      await Promise.all(
        Object.entries(course.sections).map(async ([name, data]) => {
          const _videos = await Promise.all(data.videos.map(getVideo));
          videos.push(..._videos.map((video) => ({ ...video, section: name })));
          return;
        })
      );

      const videosWithDuration = await addDurationToVideos<{ section: string }>(
        videos
      );
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
      setCourse({ ...course, sections });
    };

    p();
  }, [id]);

  return (
    <div>
      {course?.sections && (
        <ul>
          {typeof course.sections === "object" &&
            Array.isArray(course.sections) &&
            course.sections.map((video) => <Video key={video.id} {...video} />)}

          {typeof course.sections === "object" &&
            !Array.isArray(course.sections) &&
            Object.entries(course.sections).map(([name, { videos }], i) => (
              <div key={name + i}>
                <h2>{name}</h2>
                <ul>
                  {videos.map((video) => (
                    <Video key={video.id} {...video} />
                  ))}
                </ul>
              </div>
            ))}
        </ul>
      )}
    </div>
  );
}

export default TestWithId;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query as { id: string };
  return {
    props: { id },
  };
}

function Video({ id, name, duration }: Partial<VideoSafeProps>) {
  return (
    <li>
      {name} {duration}
    </li>
  );
}
