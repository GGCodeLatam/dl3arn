import styled from "styled-components";

export const CategoryContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 1.25em;
    margin: 0 0 0.5em 0;

    .category {
      color: var(--primary);
      text-transform: capitalize;
    }
  }
`;
