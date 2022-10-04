import { PrimaryButton } from "components/Buttons";
import ShareButton from "components/Buttons/ShareButton";
import { storage } from "services/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiShareAlt } from "react-icons/bi";
import { APIGetCourseById } from "utils/types/course";
import { CourseModel } from "utils/types/firebase";
import { VideoContentContainer } from "./VideoContent.styles";
import Video from "components/Video";

interface Props {
  name?: string;
  instructor?: CourseModel["instructor"] | null;
  courseName?: string;
  next?: null | (() => any);
  prev?: null | (() => any);
  videoId?: string;
  course?: APIGetCourseById;
  from?: "youtube" | "firebase" | null;
}

function VideoContent({
  courseName,
  from,
  instructor,
  name,
  next,
  prev,
  videoId,
}: Props) {
  const [src, setSrc] = useState<null | string>(null);

  useEffect(() => {
    const promise = async () => {
      try {
        if (!videoId) return null;
        if (from === "firebase")
          return setSrc(await getDownloadURL(ref(storage, videoId)));
        setSrc(
          `https://www.youtube.com/embed/${videoId}?autoplay=0&origin=https://dl3arn.com`
        );
      } catch (e) {
        console.log(e);
      }
    };
    promise();
  }, [from, videoId]);

  return (
    <VideoContentContainer>
      <div className="frame-container">
        {src &&
          (from === "firebase" ? (
            <Video title={name} src={src} />
          ) : (
            <iframe
              title={name}
              id="ytplayer"
              width="100%"
              height="100%"
              src={src}
              frameBorder="0"
              allowFullScreen
            />
          ))}
      </div>

      <div className="data">
        <h2>{name}</h2>
        <div className="video-options">
          <ShareButton
            url={window.location.href}
            title={`${
              typeof instructor === "object" ? `${instructor?.name} |` : ""
            } ${courseName} | ${name}`}
          >
            <BiShareAlt size={16} />
          </ShareButton>
          {prev && (
            <PrimaryButton onClick={prev}>
              <BiChevronLeft size={20} />
            </PrimaryButton>
          )}
          {next && (
            <PrimaryButton onClick={next}>
              <BiChevronRight size={20} />
            </PrimaryButton>
          )}
        </div>
      </div>
    </VideoContentContainer>
  );
}

export default VideoContent;
