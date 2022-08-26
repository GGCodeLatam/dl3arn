import { useEffect, useState } from "react";

import { getImage } from "services/firebase/storage";

import useCourse from "hooks/useCourse";
import useVideo from "hooks/useVideo";

import Loading from "components/Loading";
import RamppButton from "components/Buttons/RamppButton";
import Placeholder from "components/Placeholders";
import VideoContent from "components/Course/VideoContent";
import CourseIntro from "components/Course/CourseIntro";

import { Container } from "styles/course.styles";
import VideosMenu from "components/Course/VideosMenu";
import { NetworkBadge } from "components/Badges";
import { VideoSafeProps } from "utils/types/video";
import OpenSeaButton from "components/Buttons/OpenSeaButton";
import Router, { useRouter } from "next/router";

function Course() {
  const router = useRouter();

  const { id, videoId } = router.query;

  const { current, locked } = useCourse({ id: id as string });

  const videos: VideoSafeProps[] = [];

  Object.values(current?.sections || {})
    .sort((a, b) => a.position - b.position)
    .map((section) => section.videos.map((video) => videos.push(video)));

  const isFree = videos.filter((video) => video.id === videoId)![0]?.free;

  const { video, isLoading } = useVideo({
    video: {
      id: (videoId as string | undefined) || "",
      free: isFree,
    },
    locked: locked,
  });

  const handleVideo = (_id?: string | null) =>
    _id === null
      ? null
      : Router.push({
          pathname: `/course/${id}`,
          query: { videoId: _id || "" },
        });

  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    if (current && current.image)
      getImage(current.image).then((url) => setImgUrl(url));
  }, [current]);

  const getVideo = (diff: number) => {
    const available = videos
      .sort((a, b) => Number(b.free) - Number(a.free))
      .filter((video) => !!video.duration);
    if (available && !videoId) return available[0].id;

    const videoIndex = available?.findIndex((video) => video.id === videoId);
    if (typeof videoIndex !== "number" || videoIndex === -1 || !available)
      return null;

    const newIndex = videoIndex + diff;
    console.log({ available, newIndex });
    if (newIndex < 0 || newIndex >= available.length) return null;
    return available[newIndex].id;
  };

  const prev = () => handleVideo(getVideo(-1));
  const next = () => handleVideo(getVideo(1));

  return (
    <Container>
      <VideosMenu
        current={current}
        videoId={videoId}
        handleVideo={handleVideo}
        hasNFT={!locked}
      />

      <div className="course-content">
        <Loading isLoading={isLoading} element={<LoadingVideo />}>
          {!video && current && (
            <CourseIntro
              name={current.name}
              imgUrl={imgUrl}
              instructor={current.instructor}
              description={current.description}
              prev={prev}
              next={next}
            />
          )}

          {video && current && (
            <VideoContent
              name={video.name}
              videoId={video.videoId}
              instructor={current.instructor.name}
              courseName={current.name}
              prev={prev}
              next={next}
            />
          )}
        </Loading>
      </div>

      {current?.rampp && current.contract && (
        <div>
          <NetworkBadge network={current?.rampp?.network} dark toRight />
          <RamppButton
            rampp={current.rampp}
            address={current.contract.address}
          />
          {current?.opensea && <OpenSeaButton collection={current.opensea} />}
        </div>
      )}
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
