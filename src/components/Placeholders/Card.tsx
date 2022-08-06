import styled from "styled-components";
import Placeholder from ".";

const Container = styled.div`
  background-color: #0000000a;
  border-radius: 0.25rem;
  display: flex;
  flex-flow: column;
  padding: 1rem;
  gap: 1rem;

  .description {
    display: none;
  }

  footer {
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
  }

  .info {
    display: flex;

    width: 100%;
    height: max-content;
    gap: 1rem;

    .left,
    .right {
      width: 100%;
      display: flex;
      flex-flow: column;
      gap: 0.25rem;
    }
    .right {
      align-items: flex-end;
      justify-content: space-between;
    }
  }

  :first-child {
    align-items: center;
    flex-flow: row;
    grid-area: 1 / 1 / 2 / 3;
    width: 100%;

    .description {
      display: block;
    }

    header {
      width: 100%;
      height: 100%;
      .img {
        height: 100%;
      }
    }

    footer {
      width: 100%;
      height: 100%;
      justify-content: space-between;

      .info {
        flex-flow: column;
        .right {
          align-items: flex-start;
        }
      }
    }
  }
`;
function CardPlaceholder() {
  return (
    <Container>
      <header>
        <Placeholder width="100%" height="10rem" className="img" />
      </header>
      <footer>
        <div className="info">
          <div className="left">
            <Placeholder width="75%" height="1.75rem" />
            <Placeholder width="100%" height="1rem" />
          </div>
          <div className="right">
            <Placeholder width="75%" height="1rem" />
            <Placeholder width="45%" height="1rem" />
          </div>
        </div>

        <Placeholder width="100%" height="5rem" className="description" />

        <Placeholder width="100%" height="2.5rem" />
      </footer>
    </Container>
  );
}

export default CardPlaceholder;
