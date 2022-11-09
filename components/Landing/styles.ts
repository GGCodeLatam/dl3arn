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
    width: 100%;
    background: linear-gradient(0deg, transparent, #000b);
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5em;
    gap: 0.75em;
    z-index: 1;
    border-radius: 5px;
  }

  font-family: Montserrat;

  .content {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    width: 100%;
    gap: 0.25em;
    height: 100%;
    text-align: left;
  }

  border-radius: 0.25em;

  header {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;

    transition: all 0.25s;

    border-radius: 5px;
    background-color: rgb(${r}, ${g}, ${b});

    overflow: hidden;

    .img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
      aspect-ratio: 1/1;
      border-radius: 5px;
      overflow: hidden;
    }
  }

  footer {
    font-size: 0.85em;
    display: flex;
    position: relative;
    width: 100%;

    .info {
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 0.25em 0 0 0;

      .name {
        max-width: 37vw;
        text-overflow: ellipsis;
        font-size: 0.75em;
        letter-spacing: 0.5px;
        margin: 0 0 0.25em 0;

        white-space: nowrap;
        overflow: hidden;
        font-weight: 800;
      }

      .instructor {
        font-size: 0.95em;
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

  @media screen and (min-width: 520px) {
    .name {
      max-width: 25vw !important;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    footer {
      font-size: 1.25em;
    }

    .name {
      max-width: 20.5vw !important;
    }

    .instructor .name {
      width: 16.5vw;
    }
  }
  @media screen and (min-width: ${breakpoints.pc}) {
    font-size: 1rem;
    width: 100%;

    footer {
      font-size: 1.25em;
    }

    .name {
      max-width: 275px !important;
    }

    .instructor .name {
      width: 210px;
    }
  }
`;
