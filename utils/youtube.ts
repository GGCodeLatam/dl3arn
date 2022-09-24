import { YOUTUBE_API_KEY } from "constants/index";
import axios from "axios";
import ISO8601 from "./ISO8601";
import { VideoModel } from "./types/firebase";
import { VideoSafeProps } from "./types/video";

const baseUrl = `https://youtube.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=contentDetails`;

interface YoutubeResponse {
  items: { id: string; contentDetails: { duration: string } }[];
}

export async function addDurationToVideos<T = {}>(
  videos: Partial<VideoModel & T>[]
): Promise<(VideoSafeProps & T)[]> {
  const url = videos.reduce(
    (acc, { videoId }) => acc + `&id=${videoId}`,
    baseUrl
  );

  const { data } = await axios.get<YoutubeResponse>(url);

  const iso = new ISO8601();
  const withDuration = videos.map((video) => {
    const ytData = data.items.find(({ id }) => id === video.videoId);
    const { duration, ...props } = video;
    if (!ytData) return { ...props, duration: null };
    return {
      ...props,
      duration: iso._transform(ytData.contentDetails.duration),
    };
  }) as (VideoSafeProps & T)[];

  return withDuration;
}
