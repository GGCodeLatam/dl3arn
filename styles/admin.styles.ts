import styled from "styled-components";

export const AdminContainer = styled.div`
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
    li {
      padding: 0.25em 0;
      display: grid;
      grid-template-columns: minmax(50px, 75px) 1fr;
      gap: 1em;

      .email {
        width: 100%;
        font-weight: bold;
      }
      .role {
        font-size: 0.75em;
        font-weight: bold;
        background-color: #1e1e2e;
        color: #fff;
        padding: 0.35em 0.75em;
        border-radius: 5px;
        text-align: center;
      }

      .role.user {
        background-color: #5a5;
      }
      .role.admin {
        background-color: var(--primary);
      }
      .role.instructor {
        background-color: #a5f;
      }
    }
  }
`;
