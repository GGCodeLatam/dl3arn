import styled from "styled-components";

export const RoadmapContainer = styled.main`
  display: grid;
  grid-template-columns: minmax(auto, 25vw) 1fr;
  gap: 10vw;
  padding: 2rem 1rem;
  color: #fff;
  padding: 25vh 1rem;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  > section,
  .left {
    position: relative;
  }

  .left {
    width: 100%;
    h1 {
      font-size: 4rem;
    }
    p {
      margin: 1rem 0 0 0;
      font-size: 1rem;
      opacity: 0.75;
    }
  }

  .popup {
    color: #000;
    display: grid;
    place-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    padding: 0 10vw;
    background-color: #fff5;

    > div {
      position: relative;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 5px 10px #0005;

      .overflow {
        display: flex;
        flex-flow: column;
        gap: 1rem;
        height: 65vh;
        max-width: 540px;
        overflow-y: scroll;
        padding: 1rem 2rem 1rem 2rem;

        *:not(h2, section, ul) {
          opacity: 0.5;
          line-height: 1.5rem;
          letter-spacing: 0.75px;
          font-size: 0.9rem;
        }

        ul {
          margin: 1rem 0 0 0;
          padding: 0 0 0 1.75rem;
        }
      }

      .buttons {
        display: flex;
        height: max-content;
      }
      .btn {
        background-color: transparent;
        padding: 1rem 2rem;
      }
      .exit {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem 2rem;
      }
    }
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;

    .card1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .card2 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .card3 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .card4 {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
`;

export const Card = styled.button`
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem;
  background: var(--gradient);
  box-shadow: 0 5px 10px #0005;
  border-radius: 5px;
  text-align: left;

  .img {
    display: block;
    width: 50%;
    height: 100%;
  }

  .title {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 800;

    span {
    }
    h3 {
      opacity: 0.7;
    }
  }
`;
