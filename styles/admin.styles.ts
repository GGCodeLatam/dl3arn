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
        min-width: var(--avatar-size);
        min-height: var(--avatar-size);
        position: relative;
        .img {
          object-fit: contain;
        }
      }
      .role {
        position: relative;
        background-color: #1e1e2e;
        color: #fff;
        border-radius: 100%;
        --dot-size: 12px;
        min-width: var(--dot-size);
        min-height: var(--dot-size);
        display: block;

        ::after {
          position: absolute;
          top: -100%;
          left: 50%;
          transform: translate(-50%, -75%);
          background-color: #000;
          color: #fff;
          font-weight: bold;
          font-size: 0.75em;
          padding: 0.25em 0.75em;
          border-radius: 5px;
        }
      }

      .role.user {
        background-color: var(--user);
        :hover::after {
          content: "user";
        }
      }
      .role.instructor {
        background-color: var(--instructor);
        :hover::after {
          content: "instructor";
        }
      }
      .role.admin {
        background-color: var(--admin);
        :hover::after {
          content: "admin";
        }
      }
    }
  }

  .no-image {
    min-width: var(--avatar-size);
    min-height: var(--avatar-size);
    background-color: #ddd;
    border-radius: 5px;
  }
`;
