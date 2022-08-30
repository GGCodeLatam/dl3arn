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
import { GetServerSidePropsContext } from "next";
import getCourse from "services/firebase/store/getCourse";
import { APIGetCourseById } from "utils/types/course";
import Head from "next/head";

interface Props {
  course: APIGetCourseById;
}
function Course({ course }: Props) {
  console.log(typeof course);
  const router = useRouter();

  const { videoId } = router.query as {
    id: string;
    videoId?: string | null;
  };

  const { course: current, locked } = useCourse({ course: course });

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
          pathname: `/course/${course.id}`,
          query: { videoId: _id || "" },
        });

  const getVideo = (diff: number) => {
    const available = videos
      .sort((a, b) => Number(b.free) - Number(a.free))
      .filter((video) => !!video.duration);
    if (available && !videoId) return available[0].id;

    const videoIndex = available?.findIndex((video) => video.id === videoId);
    if (typeof videoIndex !== "number" || videoIndex === -1 || !available)
      return null;

    const newIndex = videoIndex + diff;
    if (newIndex < 0 || newIndex >= available.length) return null;
    return available[newIndex].id;
  };

  const prev = () => handleVideo(getVideo(-1));
  const next = () => handleVideo(getVideo(1));

  return (
    <Container>
      <Head>
        <meta property="og:image" itemProp="image" content={course.image} />
        <meta property="og:type" content="website" />
      </Head>
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
              imgUrl={course.image}
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query as { id: string };
  const course = await getCourse(id);
  const image = await getImage(course.image);

  console.log(course, image);

  const props: { course: APIGetCourseById } = {
    course: {
      ...course,
      image: image || "",
    },
  };
  return {
    props,
  };
}

function LoadingVideo() {
  return (
    <div className="loading">
      <Placeholder width="100%" height="40rem" />
      <Placeholder width="75%" height="2.5rem" />
    </div>
  );
}
