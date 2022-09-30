import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const AboutContainer = styled.main`
  padding: 15vh 0 15vh 0;
  display: flex;
  flex-flow: column;
  gap: 10vh;
  position: relative;
  color: #fff;

  .intro {
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
    margin: 7vh 0;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 2em;
    }
  }
`;
