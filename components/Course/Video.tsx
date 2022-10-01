import { HiLockClosed } from "react-icons/hi";
import { ClockIcon } from "utils/icons";
import { VideoSafeProps } from "utils/types/video";

import { Container } from "./Video.style";

interface Props {
  video: VideoSafeProps | null;
  onClick(): any;
  selected: boolean;
  hasNFT: boolean;
}

function Video({ hasNFT, selected, video, onClick }: Props) {
  if (!video || !video.name) return null;

  const blocked = !video.free && !hasNFT;
  return video.from !== "youtube" || video.duration ? (
    <Container
      isFree={video.free}
      selected={selected}
      blocked={blocked}
      onClick={onClick}
      prox={!video.duration}
    >
      <div>
        {!video.free && blocked && <HiLockClosed size={24} className="icon" />}
        <p className="name">{video.name}</p>
        {video.duration && (
          <span className="duration">
            {video.duration.h ? `${video.duration.h}h ` : ""}
            {video.duration.m ? `${video.duration.m}m ` : ""}
            {video.duration.s ? `${video.duration.s}s ` : ""}
            <ClockIcon />
          </span>
        )}
      </div>
    </Container>
  ) : (
    <Container as="div" prox={true}>
      <div>
        <p>{video.name}</p>
        <span>Proximamente</span>
      </div>
    </Container>
  );
}

export default Video;
