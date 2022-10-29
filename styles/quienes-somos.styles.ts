import styled from "styled-components";

export const QuienesSomosContainer = styled.main`
  position: relative;
  padding: 25vh 1rem;
  border: 1px solid #000;
  border-bottom: none;
  border-top: none;
  height: 100%;

  color: #fff;
  height: 100%;
  padding: 15vh 1rem;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin: 0 0 2em 0;
  }

  section {
    position: relative;
  }

  .members {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 480px;
    gap: 2.5em;
    list-style: none;
  }
`;

export const Member = styled.li`
  position: relative;
  display: flex;
  flex-flow: column;
  border-radius: 0.5rem;
  justify-content: space-between;
  color: #000;
  transition: transform 0.35s;

  .img-container {
    position: relative;
    width: 5em;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 5px 10px #0004;
  }

  .img {
    object-fit: cover;
    object-position: center;
  }

  h3 {
    font-size: calc(0.75em + 0.15vw);
    width: max-content;
    color: var(--primary);
    text-align: center;
  }
  span {
    font-size: calc(0.65em + 0.15vw);
    display: block;
    width: 100%;
    text-align: center;
    opacity: 0.5;
  }

  .toast {
    opacity: 0;
    border-radius: 5px;
    padding: 0.25em 0.75em;
    background-color: #fff;
    position: absolute;
    top: -25%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    box-shadow: 0 5px 10px #0004;
    transition: all 0.15s;
  }
  :hover {
    .toast {
      opacity: 1;
    }
  }
`;
