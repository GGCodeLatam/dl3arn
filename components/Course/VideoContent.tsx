import { PrimaryButton } from "components/Buttons";
import ShareButton from "components/Buttons/ShareButton";
import { BiChevronLeft, BiChevronRight, BiShareAlt } from "react-icons/bi";
import { APIGetCourseById } from "utils/types/course";
import { VideoContentContainer } from "./VideoContent.styles";

interface Props {
  name?: string;
  instructor?: string;
  courseName?: string;
  next?: null | (() => any);
  prev?: null | (() => any);
  videoId?: string;
  course?: APIGetCourseById;
}

function VideoContent({
  courseName,
  instructor,
  name,
  next,
  prev,
  videoId,
}: Props) {
  return (
    <VideoContentContainer>
      <div className="frame-container">
        <iframe
          title="ytvideo"
          id="ytplayer"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=https://dl3arn.com`}
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="data">
        <h2>{name}</h2>
        <div className="video-options">
          <ShareButton
            url={window.location.href}
            title={`${instructor} | ${courseName} | ${name}`}
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
