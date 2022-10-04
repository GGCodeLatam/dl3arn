import { HTMLProps, useCallback, useEffect, useRef, useState } from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import {
  MdForward10,
  MdFullscreen,
  MdFullscreenExit,
  MdReplay10,
  MdStop,
} from "react-icons/md";
import { VideoContainer } from "./Video.styles";

interface VideoState {
  playing: boolean;
  barLength: string;
  fullscreen: boolean;
}
interface Props extends HTMLProps<HTMLVideoElement> {
  src: string;
}

const init: VideoState = {
  playing: false,
  barLength: "0px",
  fullscreen: false,
};
function Video({ title, src }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState<VideoState>(init);

  const timeupdate = useCallback(() => {
    if (!ref.current || ref.current?.paused) return null;

    const { currentTime, duration, clientWidth } = ref.current;
    const px = (clientWidth * currentTime) / duration;
    const percent = (px * 100) / clientWidth;
    console.log(Math.floor(percent));
    setVideoState((old) => ({
      ...old,
      barLength: `${percent}%`,
    }));
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const { paused } = ref.current;
    setVideoState((old) => ({ ...old, playing: paused }));

    ref.current?.addEventListener("timeupdate", timeupdate);
    let refaux = ref;

    return () => {
      refaux.current?.removeEventListener("timeupdate", timeupdate);
    };
  }, [ref, timeupdate]);

  const backward = () => {
    if (!ref.current) return null;
    const { currentTime, duration, clientWidth } = ref.current;
    ref.current.currentTime -= 10;
    const px = (clientWidth * currentTime) / duration;
    const percent = (px * 100) / clientWidth;
    setVideoState((old) => ({ ...old, barLength: `${percent}%` }));
  };
  const forward = () => {
    if (!ref.current) return null;
    const { currentTime, duration, clientWidth } = ref.current;
    ref.current.currentTime += 10;
    const px = (clientWidth * currentTime) / duration;
    const percent = (px * 100) / clientWidth;
    setVideoState((old) => ({ ...old, barLength: `${percent}%` }));
  };
  const stop = () => {
    if (!ref.current) return null;
    ref.current.pause();
    ref.current.currentTime = 0;

    setVideoState((old) => ({
      ...old,
      playing: false,
      barLength: "0",
    }));
  };
  const fullScreen = () => {
    if (!ref.current || !document.fullscreenEnabled) return null;

    const video = document.getElementById("video") as HTMLVideoElement;
    if (!document.fullscreenElement) {
      video.requestFullscreen();
      setVideoState((old) => ({ ...old, fullscreen: true }));
    } else {
      document.exitFullscreen();
      setVideoState((old) => ({ ...old, fullscreen: false }));
    }
  };

  const togglePause = () => {
    if (!ref.current) return null;
    if (ref.current.paused) {
      ref.current.play();
      setVideoState((old) => ({ ...old, playing: false }));
    } else {
      ref.current.pause();
      setVideoState((old) => ({ ...old, playing: true }));
    }
  };

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const show = () => setShowOptions(true);
  const showFor = (seconds: number) => {
    setShowOptions(true);
    setTimeout(() => setShowOptions(false), seconds * 1000);
  };
  const hidde = () => setShowOptions(false);
  const toggle = () => setShowOptions((old) => !old);

  useEffect(() => {
    const video = document.getElementById("video") as HTMLVideoElement;
    if (showOptions) video.style.cursor = "default";
    else video.style.cursor = "hidden";
  }, [showOptions]);

  return (
    <VideoContainer
      onMouseMove={() => showFor(5)}
      onClick={() => showFor(5)}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }}
      className="video-container"
      id="video"
    >
      <div onClick={togglePause}>
        <video
          ref={ref}
          className="video"
          src={src}
          title={title}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
          controls={false}
        />
        {showOptions && (
          <div className="video-options">
            <button className="btn">
              {videoState.playing ? (
                <BiPlay className="play" />
              ) : (
                <BiPause className="pause" />
              )}
            </button>
          </div>
        )}
      </div>

      {showOptions && (
        <div className="bottom">
          <div className="bar">
            <div
              className="porcentaje"
              style={{ width: videoState.barLength }}
            />
          </div>

          <div className="buttons">
            <button onClick={togglePause}>
              {videoState.playing ? (
                <BiPlay className="icon" />
              ) : (
                <BiPause className="icon" />
              )}
            </button>

            <div className="right">
              <button onClick={backward}>
                <MdForward10 className="icon" />
              </button>
              <button onClick={forward}>
                <MdReplay10 className="icon" />
              </button>
              <button onClick={fullScreen}>
                {videoState.fullscreen ? (
                  <MdFullscreenExit className="icon" />
                ) : (
                  <MdFullscreen className="icon" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </VideoContainer>
  );
}

export default Video;
