import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const FeaturedContainer = styled.div`
  position: relative;
  font-size: 16px;
  overflow: hidden;
  > div {
    overflow: hidden;
  }

  .instructor {
    gap: 0.5em;
    .image-container {
      font-size: 0.65em;
    }
    .user {
      font-weight: 400 !important;
      font-size: 0.8em;
      opacity: 0.5 !important;
    }
  }

  .hero-img {
    border-radius: 5px;
    object-position: left;
    object-fit: contain;
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;
    aspect-ratio: 5 / 1;

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
    padding: 1.5rem 0;
    width: 25rem;
    font-weight: bold;
    font-size: 0.5em;
    color: #fff;
    text-transform: uppercase;

    transform: translate(-19.5em, 1.75em) rotate(-45deg);

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
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
    .badge {
      font-size: 0.5em;
      width: 20rem;
      transform: translate(-8.5em, 2.5em) rotate(-45deg);
    }

    .hero-img {
      object-fit: contain;
      aspect-ratio: 5 / 1;
    }
    .info {
      margin: 0.75em 0;
    }
  }
`;
