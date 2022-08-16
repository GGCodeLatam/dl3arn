import { useEffect, useState } from "react";
import { getImage } from "services/firebase/storage";
import { ClockIcon, FireIcon } from "utils/icons";
import { CourseModel } from "utils/types/firebase";

import { PrimaryButton } from "../Buttons";
import { Container } from "./styles";

type Get =
  | "description"
  | "id"
  | "image"
  | "instructor"
  | "name"
  | "score"
  | "total_duration";
type CardProps = Pick<CourseModel, Get>;

function Card({
  description,
  id,
  image,
  instructor,
  name,
  score,
  total_duration,
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
          <p className="description">{description}</p>
        </div>

        <PrimaryButton className="btn">Ver curso</PrimaryButton>
      </footer>
    </Container>
  );
}

export default Card;
