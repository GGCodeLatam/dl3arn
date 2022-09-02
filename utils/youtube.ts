import { YOUTUBE_API_KEY } from "constants/index";
import axios from "axios";
import ISO8601 from "./ISO8601";
import { VideoModel } from "./types/firebase";

const baseUrl = `https://youtube.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=contentDetails`;

interface YoutubeResponse {
  items: { id: string; contentDetails: { duration: string } }[];
}

export async function addDurationToVideos<T = {}>(
  videos: Partial<VideoModel & T>[]
) {
  const url = videos.reduce(
    (acc, { videoId }) => acc + `&id=${videoId}`,
    baseUrl
  );

  const { data } = await axios.get<YoutubeResponse>(url);

  const iso = new ISO8601();
  const withDuration = videos.map((video) => {
    const ytData = data.items.find(({ id }) => id === video.videoId);
    if (!ytData) return { ...video, duration: "" };
    return { ...video, duration: iso.toString(ytData.contentDetails.duration) };
  });

  return withDuration;
}
