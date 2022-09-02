import { VideoModel } from "./firebase";

type Ignore = "videoId";
export type VideoSafeProps = Partial<Omit<VideoModel, Ignore>>;

export type APIGetVideoById = VideoModel;
