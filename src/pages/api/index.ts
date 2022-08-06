import { APIHandler } from "utils/types/api";

type Response = {
  [key: string]: any;
};

const handler: APIHandler<{}, Response> = async (req, res) => {
  return res.json({
    error: null,
    data: {
      courses: {
        getCourses: "/api/courses",
        getCourse: "/api/courses/[id]",
      },
      videos: {
        getVideos: "/api/videos",
        getVideo: "/api/videos/[id]",
      },
    },
    success: true,
  });
};

export default handler;
