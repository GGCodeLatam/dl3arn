import { VideoModel } from "./firebase";

type Ignore = "videoId";
export type VideoSafeProps = Omit<VideoModel, Ignore>;

export type APIGetVideoById = VideoModel | null;
