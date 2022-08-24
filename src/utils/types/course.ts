import { CourseModel } from "./firebase";
import { Override } from "./utility";
import { VideoSafeProps } from "./video";

export type APIGetCourseById = Override<
  CourseModel,
  {
    sections: { [key: string]: { position: number; videos: VideoSafeProps[] } };
  }
> | null;
export type APIGetCourses = CourseModel[];
export type APIQueryCourses = CourseModel[];
