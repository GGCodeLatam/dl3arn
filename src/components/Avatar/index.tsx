import Placeholder from "components/Placeholders";
import styled from "styled-components";

const Container = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 1rem;

  .name {
    font-size: 0.9rem;
    letter-spacing: 0.5px;
  }

  .image-container {
    width: 2.5rem;
    height: 2.5rem;

    img {
      border-radius: 4px;
      width: 100%;
      height: 100%;
    }
  }
`;

interface Props {
  img?: string | null;
  username?: string | null;
  to?: "left" | "right";
  onClick?(): any;
  isLoading: boolean;
}
function Avatar({ img, isLoading, to, username, onClick }: Props) {
  const name = !isLoading ? (
    <span className="name">{username}</span>
  ) : (
    <Placeholder width="20rem" height="1.25rem" />
  );
  const tag = onClick ? "button" : "div";
  console.log(img);

  return (
    <Container as={tag} onClick={onClick}>
      {(!to || to === "left") && name}

      {img ? (
        <div className="image-container">
          <img className="img" src={img} alt="" loading="lazy" />
        </div>
      ) : (
        <Placeholder width="2rem" height="2rem" />
      )}

      {to === "right" && name}
    </Container>
  );
}

export default Avatar;
