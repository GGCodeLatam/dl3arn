import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const CategoryContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 1.25em;
    margin: 1em 0;

    .category {
      color: var(--primary);
      text-transform: capitalize;
    }
  }

  .list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2em 1em;
    width: 100%;
  }
  @media screen and (min-width: ${breakpoints["mobile-lg"]}) {
    .list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    .list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media screen and (min-width: ${breakpoints.pc}) {
    .list {
      grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
    }
  }
`;
