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

export const Images = styled.ul`
  margin: 1em 0 0 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  gap: 0.5em;

  .image {
    display: flex;
    flex-flow: column;
    p {
      font-weight: 500;
      font-size: 1.15em;
    }
  }
  .metadata {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: 0.75em;

    .data {
      padding: 0.15em 0.75em;
      border-radius: 5px;
    }

    .size {
      background-color: rebeccapurple;
      color: #fff;
    }
  }
`;

export const Blogs = styled.section`
  display: flex;
  flex-flow: column;
  gap: 1em;

  article {
    padding: 1em 0;
    border-bottom: 1px solid #0003;
  }

  .avatar {
    font-size: 0.75em;
    .img {
      border-radius: 100%;
    }
  }

  .main-content {
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
      background-color: #0001;
      padding: 0.5em 1em;
      border-radius: 2px;
      font-size: 0.85em;
    }
  }

  .images {
    display: flex;

    .img-container {
      position: relative;
      width: 2em;
      height: 2em;

      .img {
        object-fit: cover;
      }
    }
  }
`;
