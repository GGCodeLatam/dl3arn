import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const InversionCryptoContainer = styled.section`
  margin: 0 auto;
  position: relative;

  .deco.top {
    transform: translate(0, 0.5em);
  }
  .deco.bottom {
    transform: translate(0, -0.15em) rotate(180deg);
  }

  .content {
    position: relative;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 3em;

    .left,
    .right {
      width: 100%;
    }

    .left {
      padding: 3em 1em;
      position: relative;
      align-items: center;
      background: linear-gradient(-45deg, var(--primary) 75%, #fca);
      color: #fff;
      display: flex;
      justify-content: space-around;
      gap: 2em;
      border-radius: 5px;
      font-weight: 600;
      text-align: center;

      span {
        display: block;
        width: 100%;
        text-align: center;
        font-weight: 800;
        font-size: 2em;
      }
    }
    .right {
      text-align: center;
      font-size: 1em;

      h3 {
        font-size: 1.25em;
      }
      p {
        margin: 0.5em auto 1em auto;
        max-width: 25em;
      }
    }

    .services {
      width: max-content;
      padding: 0.75em 5em;
      margin: 2em auto 0 auto;
      font-size: 0.85em;
    }
  }

  .divider {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 50%;
    background-color: #fff;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    .content {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
