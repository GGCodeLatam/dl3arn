import { APIGetCourseById } from "utils/types/course";
import Video from "./Video";
import { VideosContainer } from "./Vides.style";

interface Props {
  videoId?: string | null;
  hasNFT: boolean;
  current: APIGetCourseById | null;
  handleVideo: (_?: string) => any;
}
function VideosMenu({ hasNFT, current, videoId, handleVideo }: Props) {
  return (
    <VideosContainer>
      <button className="course" onClick={() => handleVideo()}>
        {current?.name}
      </button>
      <ul>
        {current?.videos
          .filter((video) => video.name)
          .map((video) => (
            <Video
              hasNFT={hasNFT}
              key={video?.id}
              video={video}
              selected={!!videoId && video?.id === videoId}
              onClick={() => handleVideo(video?.id)}
            />
          ))}
      </ul>
    </VideosContainer>
  );
}
export default VideosMenu;
