import { NetworkBadge } from "components/Badges";
import FavoriteButton from "components/Buttons/FavoriteButton";
import Link from "next/link";
import { ClockIcon, FireIcon } from "utils/icons";
import { CourseModel, UserModel } from "utils/types/firebase";

import { CardContainer } from "./styles";
import Image from "next/image";
import Avatar from "components/Avatar";
import { Override } from "utils/types/utility";
import Placeholder from "components/Placeholders";

type Get =
  | "description"
  | "id"
  | "image"
  | "instructor"
  | "name"
  | "score"
  | "total_duration"
  | "url"
  | "rampp";
type CardProps = Override<
  Pick<CourseModel, Get>,
  { instructor: UserModel | null }
>;

function Card({
  id,
  image,
  instructor,
  name,
  score,
  total_duration,
  rampp,
  url,
}: CardProps) {
  const img = typeof image === "string" ? image : image?.md || "";
  return (
    <CardContainer>
      <div className="other">
        <NetworkBadge size={1.5} network={rampp?.network} onlyIcon />
        <FavoriteButton id={id} theme="light" />
      </div>

      <Link href={`/course/${url}`}>
        <a className="content">
          <header>
            {img ? (
              <Image
                width={720}
                height={720}
                className="img"
                src={img}
                alt=""
              />
            ) : (
              <Placeholder
                width="100%"
                height="100%"
                style={{ minHeight: "10rem" }}
              />
            )}
          </header>

          <footer>
            <div className="info">
              <div>
                <h3 className="name">{name}</h3>
                {(instructor && typeof instructor !== "string" && (
                  <Avatar
                    to="right"
                    img={instructor.avatar}
                    name={instructor.name}
                    className="instructor"
                  />
                )) || <Placeholder width="100%" height="1.5em" />}
              </div>
              <div className="meta">
                {total_duration && (
                  <time>
                    <ClockIcon size={14} /> {total_duration}
                  </time>
                )}
                {!!Number(score) && (
                  <p>
                    <FireIcon size={14} /> {score}
                  </p>
                )}
              </div>
            </div>
          </footer>
        </a>
      </Link>
    </CardContainer>
  );
}

export default Card;
