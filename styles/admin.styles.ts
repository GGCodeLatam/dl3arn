import styled from "styled-components";

export const AdminContainer = styled.div`
  --avatar-size: 2em;
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;

  > * {
    padding: 1em;
  }

  aside {
    background-color: #0001;
    .icon-container {
      position: relative;
      width: 2em;
      height: 2em;
      .icon {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(200%);
      }
    }
  }

  .content {
    h1 {
      font-size: 1em;
    }
  }

  .users {
    margin: 1em 0 0 0;
    max-width: 480px;
    display: grid;
    gap: 1em;

    li {
      list-style: none;
    }
  }

  .no-image {
    min-width: var(--avatar-size);
    min-height: var(--avatar-size);
    background-color: #ddd;
    border-radius: 5px;
  }
`;
