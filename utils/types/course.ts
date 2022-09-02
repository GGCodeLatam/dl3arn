import { CourseModel, Sections } from "./firebase";
import { Override } from "./utility";
import { VideoSafeProps } from "./video";

export type SafeSection = Override<Sections, { videos: VideoSafeProps[] }>;
export type APIGetCourseById = Override<
  CourseModel,
  {
    sections:
      | {
          [key: string]: { position: number; videos: VideoSafeProps[] };
        }
      | VideoSafeProps[]
      | null;
  }
> | null;

export type APIGetCourses = CourseModel[];
export type APIQueryCourses = CourseModel[];
