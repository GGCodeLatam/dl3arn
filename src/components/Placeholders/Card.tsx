import styled from "styled-components";
import Placeholder from ".";

const Container = styled.div`
  border-radius: 0.25rem;
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;
  align-items: center;

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
`;
function CardPlaceholder() {
  return (
    <Container>
      <header>
        <Placeholder width="6rem" height="6rem" className="img" />
      </header>
      <footer>
        <div className="info">
          <div className="left">
            <Placeholder width="15rem" height="1.75rem" />
            <Placeholder width="7rem" height="1rem" />
          </div>
        </div>
      </footer>
    </Container>
  );
}

export default CardPlaceholder;
