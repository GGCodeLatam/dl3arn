import styled from "styled-components";

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
      margin: 0 auto 0 auto;
    }

    > p {
      text-align: center;
      width: 90%;
      max-width: 1200px;
      margin: 1em auto 0 auto;
      opacity: 0.6;
      font-size: 0.9em;
    }
  }

  h2 {
    font-size: 2em;
    text-align: center;
    margin: 7vh;
  }
`;
