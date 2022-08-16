import { Container } from "styles/course.styles";
import useCourse from "hooks/useCourse";
import useVideo from "hooks/useVideo";
import Video from "components/Course/Video";
import Loading from "components/Loading";
import RamppButton from "components/Buttons/RamppButton";
import Placeholder from "components/Placeholders";

import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getImage } from "services/firebase/storage";

function Course() {
  const [params, setSearchParams] = useSearchParams();

  const { id } = useParams();
  const videoId = params.get("videoId");

  const { current, locked } = useCourse({ id });

  const isFree = current?.videos.filter((video) => video.id === videoId)![0]
    ?.free;

  const { video, error, isLoading } = useVideo({
    video: {
      id: videoId || "",
      free: !!isFree,
    },
    locked: locked,
  });

  const handleVideo = (_id?: string) => setSearchParams({ videoId: _id || "" });

  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    if (current && current.image)
      getImage(current.image).then((url) => setImgUrl(url));
  }, [current]);

  return (
    <Container>
      <main>
        <aside className="videos">
          <button
            className={`course ${!videoId ? "active" : ""}`}
            onClick={() => handleVideo()}
          >
            {current?.name}
          </button>
          <ul>
            {current?.videos
              .filter((video) => video.name)
              .map((video) => (
                <Video
                  hasNFT={!locked}
                  key={video?.id}
                  video={video}
                  selected={!!videoId && video?.id === videoId}
                  onClick={() => handleVideo(video?.id)}
                />
              ))}
          </ul>
        </aside>

        <div className="course-content">
          <Loading isLoading={isLoading} element={<LoadingVideo />}>
            {video ? (
              <>
                <div className="frame-container">
                  <iframe
                    title="ytvideo"
                    id="ytplayer"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&origin=http://example.com`}
                    frameBorder="0"
                  />
                </div>

                <div className="data">
                  <h2>{video.name}</h2>
                </div>
              </>
            ) : null}

            {!error && !video && current && (
              <div className="course-container">
                <div className="info">
                  {imgUrl && (
                    <img className="course-image" src={imgUrl} alt="" />
                  )}
                  <div>
                    <h2 className="course-name">{current.name}</h2>
                    <p className="instructor">by {current.instructor?.name}</p>
                  </div>
                  <p className="description">{current.description}</p>
                </div>
              </div>
            )}
          </Loading>
        </div>

        {current && current.rampp && (
          <div>
            <RamppButton rampp={current.rampp} />
          </div>
        )}
      </main>
    </Container>
  );
}

export default Course;

function LoadingVideo() {
  return (
    <div className="loading">
      <Placeholder width="100%" height="40rem" />
      <Placeholder width="75%" height="2.5rem" />
    </div>
  );
}
