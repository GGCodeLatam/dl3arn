import { YOUTUBE_API_KEY } from "constants/index";
import axios from "axios";
import ISO8601 from "./ISO8601";
import { VideoModel } from "./types/firebase";
import { Duration, VideoSafeProps } from "./types/video";
import { Override } from "./types/utility";

const baseUrl = `https://youtube.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=contentDetails`;

type WithObjectDuration<T = {}> = Override<
  Omit<VideoModel & T, "videoId">,
  { duration: Partial<Duration> | null }
>;

interface YoutubeResponse {
  items: { id: string; contentDetails: { duration: string } }[];
}

export async function addDurationToVideos<T = {}>(
  videos: Partial<VideoModel & T>[]
): Promise<Partial<WithObjectDuration<T>>[]> {
  const url = videos.reduce(
    (acc, { videoId }) => acc + `&id=${videoId}`,
    baseUrl
  );

  const { data } = await axios.get<YoutubeResponse>(url);

  const iso = new ISO8601();
  const withDuration = videos.map((video) => {
    const ytData = data.items.find(({ id }) => id === video.videoId);
    const { duration, ...props } = video;
    if (!ytData) return { ...props, duration: {} };
    return {
      ...props,
      duration: iso._transform(ytData.contentDetails.duration),
    };
  });

  return withDuration;
}
