import Placeholder from "components/Placeholders";
import Image from "next/image";
import { UserModel } from "utils/types/firebase";
import { AvatarContainer } from "./Avatar.styles";

interface Props {
  img?: string | null;
  username?: string | null;
  to?: "left" | "right";
  onClick?(): any;
  isLoading: boolean;
  role?: UserModel["role"];
}
function Avatar({ role, img, isLoading, to, username, onClick }: Props) {
  const name = !isLoading ? (
    <span className="name">{username}</span>
  ) : (
    <Placeholder width="20rem" height="1.25rem" />
  );
  const tag = onClick ? "button" : "div";

  return (
    <AvatarContainer userRole={role} as={tag} onClick={onClick}>
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
    </AvatarContainer>
  );
}

export default Avatar;
