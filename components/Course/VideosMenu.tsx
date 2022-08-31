import { APIGetCourseById } from "utils/types/course";
import { Sections } from "utils/types/firebase";
import { VideoSafeProps } from "utils/types/video";
import Video from "./Video";
import { VideosContainer } from "./Vides.style";

interface Props {
  videoId?: string | null;
  hasNFT: boolean;
  current: APIGetCourseById | null;
  handleVideo: (_?: string) => any;
}
function VideosMenu({ hasNFT, current, videoId, handleVideo }: Props) {
  const free: Sections<{ position: number; videos: VideoSafeProps[] }> = {};
  const pay: Sections<{ position: number; videos: VideoSafeProps[] }> = {};

  Object.entries(current?.sections || {}).forEach(([name, data]) => {
    const freeVideos = data.videos.filter((video) => video.free);
    const payVideos = data.videos.filter((video) => !video.free);

    if (freeVideos.length)
      free[name] = { position: data.position, videos: freeVideos };

    if (payVideos.length)
      pay[name] = { position: data.position, videos: payVideos };
  });

  return (
    <VideosContainer>
      <button className="course" onClick={() => handleVideo()}>
        {current?.name}
      </button>

      {!!Object.keys(free).length && (
        <section>
          <h2>gratuitos</h2>

          {Object.entries(free)
            .sort(([, a], [, b]) => a.position - b.position)
            .map(
              ([section, { videos }]) =>
                videos.length && (
                  <section key={`free-${section}`} className="videos">
                    <h3>{section}</h3>
                    {videos.map((video) => (
                      <Video
                        key={video.id}
                        selected={videoId === video.id}
                        onClick={() => handleVideo(video.id)}
                        hasNFT={hasNFT}
                        video={video}
                      />
                    ))}
                  </section>
                )
            )
            .filter((video) => !!video)}
        </section>
      )}

      {!!Object.keys(pay).length && (
        <section>
          <h2>pagos</h2>
          {Object.entries(pay)
            .sort(([, a], [, b]) => a.position - b.position)
            .map(
              ([section, { videos }]) =>
                videos.length && (
                  <section key={`pay-${section}`} className="videos">
                    <h3>{section}</h3>
                    {videos.map((video) => (
                      <Video
                        key={video.id}
                        selected={videoId === video.id}
                        onClick={() => handleVideo(video.id)}
                        hasNFT={hasNFT}
                        video={video}
                      />
                    ))}
                  </section>
                )
            )
            .filter((video) => !!video)}
        </section>
      )}
    </VideosContainer>
  );
}
export default VideosMenu;
