import { APIGetCourseById } from "utils/types/course";
import { Sections } from "utils/types/firebase";
import { VideoSafeProps } from "utils/types/video";
import Video from "./Video";
import { VideosContainer } from "./Videos.style";

type SectionOrNull = Sections<{
  position: number;
  videos: Partial<VideoSafeProps>[];
}>;

type ArrayOrNull = Partial<VideoSafeProps>[];

interface Props {
  videoId?: string | null;
  hasNFT: boolean;
  current: APIGetCourseById | null;
  handleVideo: (_?: string) => any;
}
function VideosMenu({ hasNFT, current, videoId, handleVideo }: Props) {
  const free: SectionOrNull = {};
  const pay: SectionOrNull = {};

  const freeArray: ArrayOrNull = [];
  const payArray: ArrayOrNull = [];

  if (
    typeof current?.sections === "object" &&
    Array.isArray(current?.sections)
  ) {
    freeArray.push(...current.sections.filter((video) => video.free));
    payArray.push(...current.sections.filter((video) => !video.free));
  }
  if (
    typeof current?.sections === "object" &&
    !Array.isArray(current?.sections)
  ) {
    Object.entries(current?.sections || {}).forEach(([name, data]) => {
      const freeVideos = data.videos.filter((video) => video.free);
      const payVideos = data.videos.filter((video) => !video.free);

      if (freeVideos.length)
        free[name] = { position: data.position, videos: freeVideos };
      if (payVideos.length)
        pay[name] = { position: data.position, videos: payVideos };
    });
  }

  return (
    <VideosContainer>
      <button className="course" onClick={() => handleVideo()}>
        <h1>{current?.name}</h1>
      </button>

      {free && !!Object.keys(free).length && (
        <section>
          <h2>gratuitos</h2>

          {Object.entries(free)
            .sort(([, a], [, b]) => a.position - b.position)
            .map(
              ([section, { videos }]) =>
                videos.length && (
                  <section key={`free-${section}`} className="videos">
                    {section !== current?.name && <h3>{section}</h3>}
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

      {pay && !!Object.keys(pay).length && (
        <section>
          <h2>pagos</h2>
          {Object.entries(pay)
            .sort(([, a], [, b]) => a.position - b.position)
            .map(
              ([section, { videos }]) =>
                videos.length && (
                  <section key={`pay-${section}`} className="videos">
                    {section !== current?.name && <h3>{section}</h3>}
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

      {freeArray?.map((video) => (
        <Video
          key={video.id}
          selected={videoId === video.id}
          onClick={() => handleVideo(video.id)}
          hasNFT={hasNFT}
          video={video}
        />
      ))}
      {payArray?.map((video) => (
        <Video
          key={video.id}
          selected={videoId === video.id}
          onClick={() => handleVideo(video.id)}
          hasNFT={hasNFT}
          video={video}
        />
      ))}
    </VideosContainer>
  );
}
export default VideosMenu;
