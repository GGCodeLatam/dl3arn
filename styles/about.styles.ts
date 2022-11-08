import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const AboutContainer = styled.main`
  display: flex;
  flex-flow: column;
  position: relative;
  color: #fff;

  .intro {
    display: grid;
    background-color: var(--brown);

    h1 {
      width: 90%;
      max-width: 1200px;
      text-align: center;
      margin: 0 auto;
    }

    > p {
      text-align: center;
      width: 90%;
      max-width: 1200px;
      margin: 1em auto 0 auto;
      opacity: 0.6;
      font-size: 0.9em;
    }
    iframe {
      display: block;
      width: 90%;
      max-width: 480px;
      aspect-ratio: 16 / 9;
      margin: 2em auto;
      border-radius: 7px;
      box-shadow: 0 0.5em 0.5em -0.5em #000a;
    }
  }

  h2 {
    font-size: 1.5em;
    text-align: center;
    margin: 0 0 7vh 0;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 2em;
    }
  }

  > section:nth-child(2n) {
    width: 100%;
    position: relative;
    z-index: 10;

    .main {
      background-color: #242424;
      padding: 3em 0;
    }
    .content {
      width: 90%;
      margin: 0 auto;
    }
  }
`;
