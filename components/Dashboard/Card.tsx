import { NetworkBadge } from "components/Badges";
import FavoriteButton from "components/Buttons/FavoriteButton";
import Link from "next/link";
import { ClockIcon, FireIcon } from "utils/icons";
import { CourseModel } from "utils/types/firebase";

import { CardContainer } from "./styles";
import Image from "next/image";

type Get =
  | "description"
  | "id"
  | "image"
  | "instructor"
  | "name"
  | "score"
  | "total_duration"
  | "rampp";
type CardProps = Pick<CourseModel, Get>;

function Card({
  id,
  image,
  instructor,
  name,
  score,
  total_duration,
  rampp,
}: CardProps) {
  return (
    <CardContainer>
      <div className="other">
        <NetworkBadge size={1.5} network={rampp?.network} onlyIcon />
        <FavoriteButton id={id} />
      </div>

      <Link href={`/course/${id}`}>
        <a className="content">
          <header>
            {image && (
              <div className="img-container">
                <Image className="img" layout="fill" src={image} alt="" />
              </div>
            )}
          </header>

          <footer>
            <div className="info">
              <div>
                <h3 className="name">{name}</h3>
                <p className="instructor">{`by ${instructor.name}`}</p>
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
