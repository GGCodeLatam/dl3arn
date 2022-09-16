import styled from "styled-components";

export const CategoryContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 1.25em;
    margin: 0 0 0.75em 0;

    .category {
      color: var(--primary);
      text-transform: capitalize;
    }
  }

  .list {
    display: flex;
    flex-flow: column;
    gap: 1em;
  }
`;
