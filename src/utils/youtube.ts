import { YOUTUBE_API_KEY } from "@/constants";
import axios from "axios";
import ISO8601 from "./ISO8601";

const baseUrl = `https://youtube.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=contentDetails`;

interface Video {
  id: string;
  videoId: string;
}

interface YoutubeResponse {
  items: { id: string; contentDetails: { duration: string } }[];
}

async function getVideosDuration(
  videos: Video[]
): Promise<{ [key: string]: string }> {
  const url = videos.reduce(
    (acc, { videoId }) => acc + `&id=${videoId}`,
    baseUrl
  );

  const { data } = await axios.get<YoutubeResponse>(url);

  const durations: { [key: string]: string } = {};

  const iso = new ISO8601();
  data.items.forEach(({ id, contentDetails: { duration } }) => {
    durations[id] = iso.toString(duration);
  });

  return durations;
}

export default getVideosDuration;
