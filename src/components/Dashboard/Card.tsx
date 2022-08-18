import { NetworkBadge } from "components/Badges";
import { useEffect, useState } from "react";
import { getImage } from "services/firebase/storage";
import { ClockIcon, FireIcon } from "utils/icons";
import { CourseModel } from "utils/types/firebase";

import { Container } from "./styles";

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
  const [storageImage, setStorageImage] = useState("");
  useEffect(() => {
    if (image) getImage(image).then((url) => setStorageImage(url));
  }, [image]);

  return (
    <Container to={`/course/${id}`}>
      <header>
        {storageImage && <img className="img" src={storageImage} alt="" />}
      </header>

      <footer>
        <div className="info">
          <NetworkBadge network={rampp?.network} onlyIcon />
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
            {score && (
              <p>
                <FireIcon size={14} /> {score}
              </p>
            )}
          </div>
        </div>
      </footer>
    </Container>
  );
}

export default Card;
