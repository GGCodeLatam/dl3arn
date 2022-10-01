import { YOUTUBE_API_KEY } from "constants/index";
import axios from "axios";
import ISO8601 from "./ISO8601";
import { VideoModel } from "./types/firebase";
import { VideoSafeProps } from "./types/video";
import admin from "firebase-admin";
import { cert } from "firebase-admin/app";

try {
  admin.initializeApp({
    credential: cert({
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    }),
    storageBucket: "dev-dl3arn.appspot.com",
  });
} catch (e) {}

const baseUrl = `https://youtube.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=contentDetails`;

interface YoutubeResponse {
  items: { id: string; contentDetails: { duration: string } }[];
}

export async function addDurationToVideos<T = {}>(
  videos: Partial<VideoModel & T>[]
): Promise<(VideoSafeProps & T)[]> {
  const from: {
    youtube: Partial<VideoModel & T>[];
    firebase: Partial<VideoModel & T>[];
  } = {
    youtube: [],
    firebase: [],
  };

  videos.forEach((video) => {
    if (!video.from || video.from === "youtube") from.youtube.push(video);
    if (video.from === "firebase") from.firebase.push(video);
  });

  if (from.youtube.length) {
    const isYoutube = (from?: string) => !from || from === "youtube";
    const url = from.youtube.reduce(
      (acc, { videoId, from }) =>
        isYoutube(from) ? acc + `&id=${videoId}` : "",
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

    const parsed = videos
      .map((video) => {
        const vw = withDuration.find((v) => v.id === video.id);
        if (vw) return vw;
        return null;
      })
      .filter((v) => !!v) as (VideoSafeProps & T)[];

    return parsed;
  }
  return [];
}
