import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  place-items: center;
  width: 100%;
  height: calc(100vh - var(--nav-size));
  margin: 0 auto;

  .link {
    font-weight: 600;
    color: #5af;
  }
  > div {
    position: relative;
    width: 481px;
  }

  .signup {
    margin: 1rem 0 0 0;
  }

  .form {
    gap: 1rem;

    &,
    .inputs {
      display: flex;
      flex-flow: column;
      width: 100%;
    }

    .inputs {
      gap: 0.5rem;
      label,
      input {
        width: 100%;
      }
    }
  }

  .container {
    display: flex;
    flex-flow: column;
    gap: 1rem;
    margin: 1rem 0;

    .separator {
      align-items: center;
      color: #0005;
      display: flex;
      font-size: 0.8rem;
      font-weight: 300;
      text-align: center;

      span {
        padding: 0 1rem;
      }

      ::before,
      ::after {
        background-color: #0003;
        content: "";
        display: block;
        height: 1px;
        position: relative;
        width: 25%;
      }
      ::before {
        margin: 0 0 0 auto;
      }
      ::after {
        margin: 0 auto 0 0;
      }
    }
  }

  .error {
    position: absolute;
    top: 0;
    left: 50%;
    color: #fff;
    background-color: #f66;
    border-radius: 2px;
    max-width: max-content;
    padding: 0.5rem 1rem;
    transform: translate(-50%, -150%);
  }
`;
