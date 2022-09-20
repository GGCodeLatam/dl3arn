import Placeholder from "components/Placeholders";
import Image from "next/image";
import { UserModel } from "utils/types/firebase";
import { AvatarContainer } from "./Avatar.styles";

interface Props {
  img?: string | null;
  username?: string | null;
  to?: "left" | "right";
  onClick?(): any;
  isLoading?: boolean;
  role?: UserModel["role"];

  name?: string | null;
  email?: string;
  fontSize?: string;
  rounded?: boolean;
}
function Avatar({
  email,
  img,
  name,
  role,
  to,
  onClick,
  fontSize = "1em",
  rounded,
}: Props) {
  const _name = <span className="name">{name}</span>;
  const _email = <span className="email">{email}</span>;

  const user = (
    <div className="user">
      {name && _name} {email && _email}
    </div>
  );

  const tag = onClick ? "button" : "div";

  return (
    <AvatarContainer
      rounded={rounded}
      to={to}
      userRole={role}
      as={tag}
      onClick={onClick}
      style={{ fontSize }}
    >
      {to === "left" && user}
      {img ? (
        <div className="image-container">
          <span className="role" />
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
      {to === "right" && user}
    </AvatarContainer>
  );
}

export default Avatar;
