import Placeholder from "components/Placeholders";
import Image from "next/image";
import styled from "styled-components";
import { AvatarContainer } from "./Avatar.styles";

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

  return (
    <AvatarContainer as={tag} onClick={onClick}>
      {(!to || to === "left") && name}

      {img ? (
        <div className="image-container">
          <Image
            layout="fill"
            className="img"
            src={img}
            alt=""
            loading="lazy"
          />
        </div>
      ) : (
        <Placeholder width="2rem" height="2rem" />
      )}

      {to === "right" && name}
    </AvatarContainer>
  );
}

export default Avatar;
