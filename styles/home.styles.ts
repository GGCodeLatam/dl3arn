import styled from "styled-components";

export const HomeContainer = styled.main`
  font-family: Montserrat;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  section {
    margin: 2em 0;

    h2 {
      font-size: 0.75em;
    }

    .cards {
      margin: 0.5rem 0 2rem 0;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
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

export const ContactUs = styled.div`
  font-size: 1em;
  padding: 20vw 0;
  margin: 1rem 0;
  position: relative;

  .decoration {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 15%;
    border-radius: 0 5px 5px 0;
    overflow: hidden;

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
  }

  .info {
    position: relative;
    padding: 0 1em;

    p {
      font-weight: bold;
      font-size: 0.9em;
      text-align: center;
    }
    .dl3arn-mail {
      background-color: var(--primary);
      border-radius: 5px;
      box-shadow: -48px -61px 52px -40px #ffd700 inset;
      color: #fff;
      display: block;
      font-size: 0.8em;
      font-weight: 500;
      margin: 1rem auto 0 auto;
      padding: 0.5em 1em;
      width: max-content;
    }
  }
`;

export const FeaturedCourse = styled.article`
  position: relative;
  font-size: 16px;
  overflow: hidden;

  .hero-img {
    border-radius: 5px;
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;
    aspect-ratio: 2 / 1;

    .img {
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
    gap: 1em;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    transform: rotate(0);

    background: var(--primary);
    padding: 1.25em 0;
    width: 20rem;
    font-weight: bold;
    font-size: 0.7em;
    color: #fff;

    transform: translate(-7.5rem, 1.25rem) rotate(-45deg);

    .badge-img-container {
      display: block;
      width: 1.5em;
      height: 1.5em;
    }
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 0;

    .left {
      display: flex;
      align-items: center;
      gap: 0.75em;

      .network {
        width: 1.5em;
        height: 1.5em;
      }
      h3 {
        font-weight: 800;
        font-size: 0.85em;
      }
      p {
        font-size: 0.55em;
        opacity: 0.5;
        font-weight: 400;
      }
    }
    .right .icon {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;

export const FeaturedPlaceholderContainer = styled.div`
  .info {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;

    > div {
      display: flex;
      flex-flow: column;
      gap: 0.25rem;
      width: 100%;
      height: 100%;
    }
  }
`;
