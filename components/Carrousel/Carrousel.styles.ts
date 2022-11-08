import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const CarrouselContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;

  .abs {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
  }

  .prev,
  .next,
  .to {
    position: absolute;
  }

  .prev,
  .next {
    top: 0;
    width: 25%;
    height: 100%;

    .icon {
      color: #fff;
    }
    :hover .icon {
      color: var(--primary);
    }
  }

  .prev {
    background: linear-gradient(
      90deg,
      rgba(var(--primary-rgb), 0.5),
      rgba(var(--primary-rgb), 0)
    );
    left: 0;
  }
  .next {
    background: linear-gradient(
      -90deg,
      rgba(var(--primary-rgb), 0.5),
      rgba(var(--primary-rgb), 0)
    );
    right: 0;
  }

  .to {
    bottom: 1em;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    margin: 0.5em 0;

    button {
      padding: 0.5em;
      background-color: transparent;
    }

    .dot {
      display: block;
      --size: 10px;
      width: var(--size);
      height: var(--size);
      border-radius: 9999px;
      background: rgba(var(--primary-rgb), 0.5);
      transform: translate(0, 0) scale(100%);
      transition: all 0.05s;
    }

    button[class="active"] .dot {
      transform: translate(0, calc(calc(var(--size) / 4) * -1)) scale(125%);
      background: rgba(var(--primary-rgb), 1);
    }
  }

  > .section {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    position: relative;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    aspect-ratio: 4 / 1;
  }
`;
