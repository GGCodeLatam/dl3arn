import { VideoModel } from "./firebase";
import { Override } from "./utility";

export type Duration = {
  sign?: string | number;
  years?: string | number;
  months?: string | number;
  weeks?: string | number;
  d?: string | number;
  h?: string | number;
  m?: string | number;
  s?: string | number;
};
type Ignore = "videoId";
export type VideoSafeProps = Partial<
  Override<
    Omit<VideoModel, Ignore>,
    {
      duration: Partial<Duration> | null;
    }
  >
>;

export type APIGetVideoById = VideoModel;
