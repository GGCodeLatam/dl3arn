import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const HomeContainer = styled.main`
  font-family: Montserrat;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  section {
    margin: 2em 0;

    h2 {
      font-size: 0.75em;
      font-weight: 700;
    }

    .cards {
      margin: 0.5rem 0 2rem 0;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1em;

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

  .list {
    display: flex;
    flex-flow: column;
    gap: 1em;
    margin: 0.25em 0 0 0;
  }

  section:last-child {
    margin: 0 auto 10vh auto;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    section {
      h2 {
        font-size: 0.9em;
      }
    }
    .cards {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
`;

export const ContactUs = styled.section`
  font-size: calc(1rem + 0.75vw);
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

    h1,
    p {
      text-align: center;
    }

    h1 {
      font-size: 1em;
      margin: 1em 0;
    }
    p {
      font-weight: light;
      font-size: 0.7em;
    }
    .dl3arn-mail {
      background-color: var(--primary);
      border-radius: 5px;
      box-shadow: -48px -61px 52px -40px #ffd700 inset;
      color: #fff;
      display: block;
      font-size: 0.6em;
      font-weight: 500;
      margin: 0.75em auto 0 auto;
      padding: 0.5em 1em;
      width: max-content;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 5em 0;
    font-size: 1.5em;

    .decoration {
      display: block;
    }
    .info {
      h1,
      p {
        text-align: left;
        width: 85%;
      }
      h1 {
        font-size: 1em;
      }
      p {
        font-size: 0.55em;
        margin: 0.5em 0;
      }
      .dl3arn-mail {
        font-size: 0.55em;
        margin: 0 0 0 0;
      }
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
