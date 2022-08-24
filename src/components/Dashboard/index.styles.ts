import styled from "styled-components";

export const DashboardContainer = styled.main`
  font-family: Montserrat;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  .contact-us {
    padding: 4.5rem 2rem;
    margin: 1rem 0;
    position: relative;

    .decoration {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 25%;
    }

    .tr1,
    .tr2 {
      position: absolute;
      top: 0;
      right: 0;
    }

    .tr1 {
      width: 100%;
      height: 100%;
      background-color: var(--primary);
      clip-path: polygon(0 100%, 100% 100%, 100% 0);
    }
    .tr2 {
      width: 100%;
      height: 100%;
      background-color: #ffe141;
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      filter: drop-shadow(0 0.5rem 0.5rem #000a);
    }

    .info {
      position: relative;
      p {
        max-width: 35rem;
        font-weight: bold;
        font-size: 1.5rem;
      }
      .dl3arn-mail {
        background-color: var(--primary);
        border-radius: 5px;
        box-shadow: -48px -61px 52px -40px #ffd700 inset;
        color: #fff;
        display: block;
        font-size: 0.85rem;
        font-weight: 500;
        margin: 1rem 0 0 0;
        padding: 0.5rem 1rem;
        width: max-content;
      }
    }
  }

  section {
    h2 {
      font-size: 1.25rem;
      padding: 1rem 0;
    }

    .cards {
      margin: 2rem 0 2rem 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .add-course {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 2rem;
        background-color: #25d36625;
        border: 4px dashed #25d366a0;
        border-radius: 7px;

        color: #888;
        font-weight: 700;

        .icon {
          color: #25d366;
        }

        p {
          text-align: center;
          font-size: 1.15rem;
        }
      }
    }
  }
`;

export const FeaturedCourse = styled.article`
  position: relative;
  .img-container {
    border-radius: 5px;
    display: flex;
    aspect-ratio: 5 / 1;
    overflow: hidden;
    position: relative;
    width: 100%;

    img {
      height: 100%;
      object-fit: cover;
      object-position: top;
      width: 100%;
    }

    ::after {
      content: "";
      background: linear-gradient(-30deg, transparent, #0008);
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    transform: rotate(0);

    background: var(--primary);
    padding: 1rem 0;
    width: 20rem;
    font-weight: bold;
    color: #fff;

    transform: translate(-6rem, 2rem) rotate(-45deg);

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  .info {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;

    h3 {
      font-weight: 800;
    }
    p {
      font-size: 0.8rem;
      opacity: 0.5;
      font-weight: 400;
    }
  }

  .favorite {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
  }
`;
