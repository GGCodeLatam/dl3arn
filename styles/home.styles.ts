import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const HomeContainer = styled.main`
  font-family: Montserrat;
  width: 90%;
  max-width: 1200px;
  min-width: 300px;
  margin: 0 auto;

  > section {
    margin: 2em 0;

    h2 {
      font-size: 0.75em;
      font-weight: 700;
      margin: 0.25em 0;
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

  > section:last-child {
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
