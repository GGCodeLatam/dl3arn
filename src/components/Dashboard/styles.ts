import { Link } from "react-router-dom";
import styled from "styled-components";

const MIN = 200;
const MAX = 255;
const { r, g, b } = {
  r: Math.floor(Math.random() * (MAX - MIN) + MIN),
  g: Math.floor(Math.random() * (MAX - MIN) + MIN),
  b: Math.floor(Math.random() * (MAX - MIN) + MIN),
};

export const Container = styled(Link)`
  font-family: Montserrat;
  display: flex;
  gap: 1rem;
  text-align: left;
  align-items: center;

  border-radius: 0.25rem;

  :hover header {
    transform: scale(110%);
  }

  header {
    --img-size: 6rem;
    position: relative;
    display: flex;
    width: var(--img-size);
    height: var(--img-size);
    transition: all 0.25s;

    border-radius: 5px;
    background-color: rgb(${r}, ${g}, ${b});

    overflow: hidden;

    .img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  footer {
    .info {
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .name {
        max-width: 15rem;
        text-overflow: ellipsis;
        font-size: 1.1rem;
        letter-spacing: 0.5px;
      }
      .instructor {
        font-size: 0.8rem;
        opacity: 0.5;
        font-weight: 400;
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

  .name {
    white-space: nowrap;
    overflow: hidden;
    font-weight: 800;
  }
`;
