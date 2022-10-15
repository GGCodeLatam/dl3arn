import styled, { keyframes } from "styled-components";

export const BlogContainer = styled.div`
  padding: 2em 2.5em;
  background-color: #eee;
  width: 75%;
  height: max-content;
  margin: 1em auto;
  border-radius: 2px;
  position: relative;
  display: flex;
  flex-flow: column;
  gap: 0;

  .title {
    font-size: 1.75rem;
  }

  .metadata {
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.25rem 0 0 0;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  .right {
  }

  .avatar {
    font-size: 0.75rem;
    .image-container {
      display: none;
    }
  }
  .content {
    margin: 1rem 0 0 0;
    display: flex;
    flex-flow: column;
    gap: 1.5rem;

    .images {
      display: flex;
      width: 100%;
      height: 9em;

      .container {
        cursor: pointer;
        position: relative;
        width: 100%;

        figure,
        .img-container {
          height: 100%;
        }

        figure {
          width: 100%;
          .img-container {
            position: relative;
            width: 100%;
          }

          figcaption {
            font-size: 0.7em;
            color: #888;
            font-weight: 400;
            z-index: 10;
            height: max-content;
            width: 100%;
            text-align: center;
          }
        }

        .hover {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          background-color: #000a;
          transition: all 0.15s;
          display: grid;
          place-items: center;
        }
        :hover .hover {
          opacity: 1;
          color: #fff;
        }
      }
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to { 
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0%);
  }

  50% {
    transform: scale(105%);
  }
  to { 
    transform: scale(100%);
  }
`;

export const FullscreenImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #0007;
  display: grid;
  place-items: center;
  opacity: 0;
  animation: ${fadeIn} 0.15s ease forwards;

  .image-container {
    position: relative;
    width: 95%;
    height: 75%;
    animation: ${scaleIn} 0.25s ease forwards;
  }
`;

export const UserContainer = styled.div`
  width: 100%;
  margin: 1.5em 0 0 0;

  .avatar {
    font-size: 0.8rem;

    .image-container {
      display: block;
    }
  }
  .bio {
    margin: 0.75rem 0 0 0;
  }
`;
