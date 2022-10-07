import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em 0;

  form,
  label,
  input {
    width: 100%;
  }

  > h1 {
    font-size: 1em;
    margin: 0 0 2em 0;
  }
  section > h2 {
    font-size: 0.8em;
  }
`;

export const Blogs = styled.section`
  display: flex;
  flex-flow: column;
  gap: 1em;
  max-width: 480px;
  margin: 0 auto;

  article {
    background: #0000000a;
  }

  .avatar {
    font-size: 0.6em;
    .img {
      border-radius: 100%;
    }
  }

  .main-content {
    padding: 0.5em 1em;
    margin: 0.5em 0 0 0;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-size: 1em;
      }
      time {
        display: flex;
        gap: 1em;
        font-size: 0.75em;
        opacity: 0.5;
      }
    }
    p {
      border-radius: 2px;
      font-size: 0.85em;
    }
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 1em 0 0 0;

  .img-container:first-child {
    grid-area: 1 / 1 / 3 / 3;
  }
  .img-container:nth-child(2) {
    grid-area: 1 / 3 / 3 / 4;
  }

  .img-container {
    position: relative;
    width: 100%;
    height: 100%;
    aspect-ratio: 4 / 3;

    .img {
      object-fit: cover;
    }
  }
`;
