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
  fontSize?: { img?: string; name?: string; email?: string };
  rounded?: boolean;
  className?: string;
}
function Avatar({
  className,
  email,
  fontSize = { img: "1em", name: "1em" },
  img,
  name,
  onClick,
  role,
  rounded,
  to,
}: Props) {
  const _name = name && <span className="name">{name}</span>;
  const _email = email && <span className="email">{email}</span>;

  const _user = (_name || _email) && (
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
      fontSize={fontSize}
      className={className}
    >
      {to === "left" && _user}
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
        <Placeholder
          className="image-container"
          width={fontSize.img || "2.5em"}
          height={fontSize.img || "2.5em"}
        />
      )}
      {to === "right" && _user}
    </AvatarContainer>
  );
}

export default Avatar;
