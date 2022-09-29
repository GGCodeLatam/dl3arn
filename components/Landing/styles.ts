import styled from "styled-components";
import breakpoints from "utils/breakpoints";

const MIN = 200;
const MAX = 255;
const { r, g, b } = {
  r: Math.floor(Math.random() * (MAX - MIN) + MIN),
  g: Math.floor(Math.random() * (MAX - MIN) + MIN),
  b: Math.floor(Math.random() * (MAX - MIN) + MIN),
};

export const CardContainer = styled.div`
  position: relative;

  .other {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 0.75em;
    z-index: 1;
  }

  font-family: Montserrat;

  .content {
    :hover header {
      transform: scale(110%);
    }
    display: flex;
    gap: 1em;
    text-align: left;
    align-items: center;
  }

  border-radius: 0.25em;

  header {
    --img-size: 4em;
    position: relative;
    display: flex;

    width: var(--img-size);
    height: var(--img-size);
    min-width: var(--img-size);
    min-height: var(--img-size);
    transition: all 0.25s;

    border-radius: 5px;
    background-color: rgb(${r}, ${g}, ${b});

    overflow: hidden;

    .img-container {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      .img {
        object-fit: cover;
        object-position: center;
      }
    }
  }

  footer {
    font-size: 1em;
    display: flex;
    height: 100%;
    position: relative;

    .info {
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .name {
        max-width: 50vw;
        text-overflow: ellipsis;
        font-size: 0.75em;
        letter-spacing: 0.5px;
        margin: 0 0 0.25em 0;

        white-space: nowrap;
        overflow: hidden;
        font-weight: 800;
      }
      .instructor {
        gap: 0.5em;
        .image-container {
          font-size: 0.65em;
        }
        .user {
          font-weight: 400 !important;
          font-size: 0.8em;
          opacity: 0.5 !important;
        }
      }
      .meta {
        display: flex;
        flex-flow: column;
        align-items: flex-end;
        font-size: 0.85rem;
        opacity: 0.65;
        > * {
          gap: 0.5rem;
          display: flex;
          align-items: center;
          flex-flow: row-reverse;
          white-space: nowrap;
        }
      }
    }
    .btn {
      margin: 1rem 0 0 0;
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    header {
      --img-size: 5em;
    }
    footer {
      font-size: 1.25em;
      .info .name {
      }
    }
  }
`;
