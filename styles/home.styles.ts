import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const HomeContainer = styled.main`
  font-family: Montserrat;
  width: 90%;
  max-width: 1200px;
  min-width: 300px;
  margin: 0 auto;

  > section {
    margin: 2em 0;
    width: 100%;
    > h2 {
      font-size: 0.75em;
      padding: 0.5em 0;
      color: #555;
    }
  }

  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em 1em;
    width: 100%;
  }

  @media screen and (min-width: 520px) {
    .list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    .list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media screen and (min-width: ${breakpoints.pc}) {
    .list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
