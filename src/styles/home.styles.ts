import styled from "styled-components";
import Flower from "assets/Coin-Flower.png";

export const HomeContainer = styled.div`
  main {
    position: relative;
    padding: 25vh 1rem;
    border: 1px solid #000;
    border-bottom: none;
    border-top: none;
    height: 100%;
  }

  .content {
    width: 100%;

    .bg,
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .bg {
      background: linear-gradient(#4374ff, #030816);
    }
    .overlay {
      background-image: url(${Flower});
      background-position: top center;
      background-repeat: no-repeat;
      background-size: contain;
      background-attachment: fixed;
      background-origin: content-box, padding-box;
      padding: 10px;
      opacity: 0.4;
    }

    .main-content {
      position: relative;
      display: flex;
      flex-flow: row;
      gap: 10vw;
      align-items: center;

      .header {
        font-size: 2.15rem;
        color: #fff;
        text-shadow: 0 4px 10px #0008;
        margin: 0 0 5vh 0;
      }

      .buttons {
        display: flex;
        flex-flow: row;
        gap: 1rem;

        .link {
          border-radius: 9999px;
          padding: 1rem 3rem;
          background-color: transparent;
          text-transform: capitalize;
          font-weight: bold;
          font-size: 1.1rem;
          color: #fff;
          transition: transform 0.3s;
        }

        .link:hover {
          transform: scale(110%);
        }

        .login {
          background-color: var(--primary);
          box-shadow: -48px -61px 52px -40px #ffd700 inset;
        }
        .quienes-somos {
          border: 1px solid #fff;
        }
      }

      .presentation {
        display: flex;

        width: 100%;
        max-width: 1200px;
        aspect-ratio: 16/9;
        padding: 2px;
        background-color: #fff;
        border-radius: 3px;

        iframe {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
