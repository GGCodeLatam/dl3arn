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
      display: flex;
      align-items: center;
      grid-template-columns: minmax(50px, 75px) 1fr;
      gap: 1em;

      .email {
        width: 100%;
        font-weight: bold;
      }
      .avatar {
        width: 2.5em;
        height: 2.5em;
        position: relative;
        .img {
          object-fit: contain;
        }
      }
      .role {
        background-color: #1e1e2e;
        color: #fff;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        display: block;
      }

      .role.user {
        background-color: var(--user);
      }
      .role.instructor {
        background-color: var(--instructor);
      }
      .role.admin {
        background-color: var(--admin);
      }
    }
  }
`;
