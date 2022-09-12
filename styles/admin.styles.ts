import styled from "styled-components";

export const AdminContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  > * {
    padding: 1em;
  }

  aside {
    background-color: #0001;
  }

  .content {
    h1 {
      font-size: 1em;
    }
  }
`;
