import { CourseModel } from "./firebase";
import { Override } from "./utility";
import { VideoSafeProps } from "./video";

export type APIGetCourseById = Override<
  CourseModel,
  {
    videos: VideoSafeProps[];
  }
> | null;
export type APIGetCourses = CourseModel;
