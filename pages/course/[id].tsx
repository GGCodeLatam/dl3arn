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
import { useAuth } from "context/firebase";
import OGTags from "components/SEO";
import useShow from "hooks/useShow";
import { BiChevronRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

interface Props {
  course: APIGetCourseById;
  path: string;
}
function Course({ course, path }: Props) {
  const { state, show, hide } = useShow({});
  const router = useRouter();
  const {
    data: { isLoading: userIsLoading },
  } = useAuth();

  const { videoId } = router.query as {
    id: string;
    videoId?: string | null;
  };

  const { locked } = useCourse({ course: course });

  const videos: VideoSafeProps[] = [];

  Object.values(course?.sections || {})
    .sort((a, b) => a.position - b.position)
    .map((section) => section.videos.map((video) => videos.push(video)));
  course;
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
    if (!videos.length) return null;
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

  const hasPrev = () => getVideo(-1);
  const hasNext = () => getVideo(1);

  return (
    <>
      <OGTags
        description={course.description}
        image={course.image}
        title={course.name}
        type="website"
        url={path}
      />

      {!userIsLoading && (
        <Container showMenu={state}>
          <div className="left">
            <button className="close" onClick={hide}>
              <FaTimes />
            </button>
            <VideosMenu
              current={course}
              videoId={videoId}
              handleVideo={handleVideo}
              hasNFT={!locked}
            />
          </div>

          <button className="show-menu" onClick={show}>
            Videos
            <BiChevronRight size={16} className="icon" />
          </button>

          <div className="middle">
            <Loading isLoading={isLoading} element={<LoadingVideo />}>
              {!video && course && (
                <CourseIntro
                  name={course.name}
                  imgUrl={course.image}
                  instructor={course.instructor}
                  description={course.description}
                  prev={hasPrev() ? prev : null}
                  next={hasNext() ? next : null}
                />
              )}

              {video && course && (
                <VideoContent
                  course={course}
                  name={video.name}
                  videoId={video.videoId}
                  instructor={course.instructor.name}
                  courseName={course.name}
                  prev={hasPrev() ? prev : null}
                  next={hasNext() ? next : null}
                />
              )}
            </Loading>
          </div>

          <div className="right">
            {course?.rampp && course.contract && (
              <>
                <NetworkBadge
                  network={course.rampp.network}
                  dark
                  toRight
                  onlyIcon
                />
                <RamppButton
                  rampp={course.rampp}
                  address={course.contract.address}
                />
                {course?.opensea && (
                  <OpenSeaButton collection={course.opensea} />
                )}
              </>
            )}
          </div>
        </Container>
      )}
    </>
  );
}

export default Course;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query as { id: string };

  const course = await getCourse(id);
  console.log(course);

  const host = context.req.headers.host;
  const path = context.resolvedUrl;

  const fullURL = `${
    host?.includes("localhost") ? "http" : "https"
  }://${host}${path}`;

  const props: Props = {
    course,
    path: fullURL,
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
