import ShareButton from "components/Buttons/ShareButton";
import { VideoContentContainer } from "./VideoContent.styles";

interface Props {
  name?: string;
  instructor?: string;
  courseName?: string;
  next: () => void;
  prev: () => void;
  videoId?: string;
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
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com`}
          frameBorder="0"
        />
      </div>

      <div className="data">
        <h2>{name}</h2>
        <div className="video-options">
          <ShareButton
            url={window.location.href}
            title={`${instructor} | ${courseName} | ${name}`}
          >
            Compartir
          </ShareButton>
          <button onClick={prev}>Anterior</button>
          <button onClick={next}>Siguiente</button>
        </div>
      </div>
    </VideoContentContainer>
  );
}

export default VideoContent;
