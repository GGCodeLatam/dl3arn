import styled from "styled-components";

export const FavoritesContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  .message {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.5em;

    margin: 10vh 0;

    h1 {
      font-size: 2.5em;
    }
    p {
      font-size: 1em;
    }
    .link {
      margin: 5vh 0 0 0;
      padding: 0.75em 1em;
    }
  }

  .favorites {
    display: flex;
    flex-flow: column;
  }
`;

export const FavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;

  :not(:last-child) {
    border-bottom: 1px solid #0001;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 2em;
    width: 100%;

    .img-container {
      position: relative;
      width: 4em;
      height: 4em;
      background-color: #0001;
      border-radius: 5px;
      overflow: hidden;

      .img {
        object-fit: cover;
        object-position: center;
      }
    }

    .info {
      p {
        font-size: 0.85em;
        opacity: 0.5;
      }
    }
  }
`;
