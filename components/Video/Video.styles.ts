import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;

  .video-container {
    width: 100%;
    height: 100%;
    object-position: center;
  }
  .video {
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center;
  }

  .bottom,
  .video-options {
    opacity: 1;
  }
  .video-options {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(0deg, #0008, transparent);
    transition: opacity 0.15s;

    .btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #1e1e1e;
      border-radius: 100%;
      display: grid;
      place-items: center;
      width: 4em;
      height: 4em;

      .pause,
      .play {
        width: 2em;
        height: 2em;
        color: #fff;
        z-index: 2;
        transition: all 0.15s;
      }
      .play {
        transform: translate(5%, 0);
      }
    }
  }

  .bottom {
    transition: all 0.15s;
    display: flex;
    flex-flow: column;
    gap: 0.25em;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    padding: 0.25em 1em;

    .bar {
      height: 3px;
      width: 100%;
      background-color: #fff5;

      .porcentaje {
        position: relative;
        height: 100%;
        background-color: var(--primary);
        transition: width 0.25s linear;

        ::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(50%, -50%);
          width: 12px;
          height: 12px;
          border-radius: 100%;
          background-color: rgba(var(--primary-rgb), 1);
        }
      }
    }
  }
  .bottom {
    opacity: 1;
    display: flex;
    .buttons {
      display: flex;
      justify-content: space-between;
      margin: 0.25em 0 0 0;
      .right {
        display: flex;
        gap: 0.25em;
      }
    }
    button {
      opacity: 0.5;
      color: #fff;
      background: transparent;
      .icon {
        --icon-size: 1.75em;
        width: var(--icon-size);
        height: var(--icon-size);
      }
    }
    button:hover {
      opacity: 1;
    }
  }

  :hover {
    .video-options {
      opacity: 1;
      .btn:hover {
        cursor: pointer;
        background-color: var(--primary);
      }
    }
  }
`;
