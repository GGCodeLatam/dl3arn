import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const ContactUs = styled.section`
  font-size: calc(1rem + 0.5vw);
  padding: 1em 0;
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
      background: linear-gradient(var(--beige), var(--primary));
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      filter: drop-shadow(0 0.5rem 0.5rem #000a);
    }
  }

  .info {
    position: relative;

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
      border-radius: 5px;
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
    padding: 0.5em 0;
    font-size: 1.35em;

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
        font-size: 0.6em;
        margin: 0.5em 0;
      }
      .dl3arn-mail {
        font-size: 0.55em;
        margin: 0;
      }
    }
  }
`;
