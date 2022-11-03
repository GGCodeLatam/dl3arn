import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const FooterContainer = styled.footer`
  position: relative;
  color: #fff;
  display: flex;
  flex-flow: column;
  gap: 0;

  .wave {
    width: 100%;
    transform: translate(0, 1px);
  }
  .data {
    background-color: #1e1e20;
    position: relative;
    padding: 5vh 1rem 0 1rem;

    .container {
      margin: 0 auto;
      max-width: 1200px;
    }
  }

  .sections {
    display: grid;
    place-items: center;
    gap: 2em;
    margin: 7vh 0;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    .sections {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const FooterSection = styled.section`
  padding: 0 1em;
  width: 100%;
  height: 100%;

  h2 {
    font-size: 1.25em;
    margin: 0 0 0.25em 0;
  }

  :not(:last-child) {
    border-right: none;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    :not(:first-child) {
      align-self: flex-start;
    }
    :not(:last-child) {
      border-right: 1px solid #fff2 !important;
    }
  }
`;

export const PageList = styled.nav`
  display: flex;
  flex-flow: column;

  .link {
    min-width: max-content;
    opacity: 0.45;
    padding: 0.25em 0;
    margin: 0.25em 0;

    :hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 0.25rem;

  li {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .contact {
    display: flex;
    align-items: center;
    gap: 0.5em;
    opacity: 0.45;
    padding: 0.25em 0;
    margin: 0.25em 0;

    .icon {
      width: 1.25em;
      height: 1.25em;
    }

    :hover {
      opacity: 1;
    }
  }
`;

export const Copyright = styled.p`
  padding: 1rem 0;
  text-align: center;
  font-size: 0.85em;
  opacity: 0.5;
`;

export const LogoContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
  .logos {
    position: relative;
  }

  .logo-img {
    margin: 0 auto;
  }

  .icons {
    position: absolute;
    height: max-content;
    display: flex;

    bottom: -2em;
    left: 50%;
    transform: translate(-50%, 0);

    .icon-container {
      position: relative;
      width: 1.5em;
      height: 1.5em;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    .img-container {
      width: 10em;
      height: 3em;
    }
  }
`;
