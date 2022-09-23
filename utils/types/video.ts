import { VideoModel } from "./firebase";
import { Override } from "./utility";

type Ignore = "videoId";
export type VideoSafeProps = Partial<
  Override<
    Omit<VideoModel, Ignore>,
    {
      duration: {
        sign?: string;
        years?: string;
        months?: string;
        weeks?: string;
        d?: string;
        h?: string;
        m?: string;
        s?: string;
      };
    }
  >
>;

export type APIGetVideoById = VideoModel;
