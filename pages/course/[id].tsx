import { GetServerSidePropsContext } from "next";
import Router, { useRouter } from "next/router";
import { BiChevronRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

import useCourse from "hooks/useCourse";
import useShow from "hooks/useShow";
import useVideo from "hooks/useVideo";

import CourseIntro from "components/Course/CourseIntro";
import Layout from "components/Layouts";
import Loading from "components/Loading";
import OGTags from "components/SEO";
import OpenSeaButton from "components/Buttons/OpenSeaButton";
import Placeholder from "components/Placeholders";
import RamppButton from "components/Buttons/RamppButton";
import VideoContent from "components/Course/VideoContent";
import VideosMenu from "components/Course/VideosMenu";
import { NetworkBadge } from "components/Badges";

import authenticated from "utils/authenticated";
import { APIGetCourseById } from "utils/types/course";
import { VideoSafeProps } from "utils/types/video";

import getCourseDetails from "services/firebase/store/getCourseDetails";
import { Container } from "styles/course.styles";

interface Props {
  course: APIGetCourseById;
  meta: {
    description: string;
    image: string;
    title: string;
    type: string;
    url: string;
    name: string;
  };
}
function Course({ course, meta }: Props) {
  const { state, show, hide } = useShow({});
  const router = useRouter();

  const { v } = router.query as {
    id: string;
    v?: string | null;
  };

  const { locked } = useCourse({ course: course });

  const videos: Partial<VideoSafeProps>[] = [];

  if (typeof course?.sections === "object" && Array.isArray(course.sections)) {
    videos.push(...course.sections);
  }
  if (typeof course?.sections === "object" && !Array.isArray(course.sections)) {
    Object.values(course?.sections || {})
      .sort((a, b) => a.position - b.position)
      .map((section) => section.videos.map((video) => videos.push(video)));
  }

  const isFree = videos.filter((video) => video.id === v)![0]?.free;

  const { video, isLoading } = useVideo({
    video: {
      id: (v as string | undefined) || "",
      free: isFree || false,
    },
    locked: locked,
  });

  const handleVideo = (_id?: string | null) =>
    _id === null
      ? null
      : Router.push(
          {
            pathname: `/course/${course?.url}`,
            query: { v: _id || "" },
          },
          undefined,
          { shallow: true }
        );

  const getVideo = (diff: number) => {
    if (!videos.length) return null;
    const available = videos
      .sort((a, b) => Number(b.free) - Number(a.free))
      .filter((video) => !!video.duration);
    if (available![0] && !v) return available[0].id;

    const videoIndex = available?.findIndex((video) => video.id === v);
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
        description={meta.description}
        image={meta.image}
        title={meta.title}
        type={meta.type}
        url={meta.url}
      />

      <Layout>
        <Container showMenu={state}>
          <div className="grid">
            <div className="left">
              <button className="close" onClick={hide}>
                <FaTimes />
              </button>
              <VideosMenu
                current={course}
                videoId={v}
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
                    sections={course.sections}
                    name={course.name}
                    imgUrl={
                      typeof course.image === "string"
                        ? course.image
                        : course?.image?.md || ""
                    }
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
                    from={video.from}
                    videoId={video.videoId}
                    instructor={course.instructor}
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
          </div>
        </Container>
      </Layout>
    </>
  );
}

export default Course;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { __user_token } = context.req.cookies;

  if (!(await authenticated({ token: __user_token, verified: true })))
    return { redirect: { permanent: false, destination: "/auth/login" } };

  const { id } = context.query as { id: string };

  const course = await getCourseDetails(id);

  const host = context.req.headers.host;
  const path = context.resolvedUrl;

  const fullURL = `${
    host?.includes("localhost") ? "http" : "https"
  }://${host}${path}`;

  const image =
    typeof course?.image === "string" ? course.image : course?.image?.md || "";

  const props: Props = {
    course,
    meta: {
      description: course?.description || "",
      image,
      name: course?.name || "",
      title: `${course?.name ? `${course.name} | ` : ""}DL3ARN`,
      type: "website",
      url: fullURL,
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
