import styled from "styled-components";

export const InversionCryptoContainer = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 2em;
    text-align: center;
    margin: 7vh;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 3em;

    .left,
    .right {
      width: 100%;
    }

    .left {
      box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.5),
        0 0 10px rgba(var(--primary-rgb), 0.5);
      padding: 3em 1em;
      position: relative;
      align-items: center;
      background-color: var(--primary);
      color: #fff;
      display: flex;
      justify-content: space-around;
      gap: 2em;
      border-radius: 5px;
      font-weight: 600;

      span {
        display: block;
        width: 100%;
        text-align: center;
        font-weight: 800;
        font-size: 2em;
      }
    }
    .right {
      text-align: center;
      font-size: 1em;

      h3 {
        font-size: 1.25em;
      }
      p {
        margin: 0.5em auto 1em auto;
        max-width: 25em;
      }
    }
  }

  .divider {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 50%;
    background-color: #fff;
  }
`;
