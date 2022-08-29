import Link from "next/link";
import Image from "next/image";
import Coin from "assets/Coin.png";

import { NetworkBadge } from "components/Badges";
import { CourseModel } from "utils/types/firebase";
import FavoriteButton from "components/Buttons/FavoriteButton";
import { useEffect, useState } from "react";
import { getImage } from "services/firebase/storage";
import Placeholder from "components/Placeholders";
import { FeaturedContainer } from "./Featured.styles";

interface Props {
  badge?: boolean;
  course: CourseModel;
}
function Featured({ badge, course }: Props) {
  const [storageImage, setStorageImage] = useState<string | null>("");
  useEffect(() => {
    if (course?.image)
      getImage(course.image).then((url) => setStorageImage(url));
  }, [course]);

  return (
    <FeaturedContainer>
      <Link href={`/course/${course.id}`}>
        <a className="header-container">
          {storageImage ? (
            <div>
              {badge ? (
                <div className="badge">
                  <div className="badge-img-container">
                    <Image
                      layout="responsive"
                      className="img"
                      width="1em"
                      height="1em"
                      src={Coin}
                      alt=""
                    />
                  </div>
                  <span>DL3ARN</span>
                </div>
              ) : null}
              <div className="hero-img">
                <Image
                  className="img"
                  width="1200px"
                  height="240px"
                  src={storageImage}
                  alt=""
                />
              </div>
            </div>
          ) : (
            <Placeholder width="100%" className="img-container" />
          )}
        </a>
      </Link>
      <div className="info">
        <div className="left">
          <NetworkBadge
            network={course.rampp?.network}
            onlyIcon
            className="network"
          />
          <div>
            <h3>{course.name}</h3>
            <p>{course.instructor.name}</p>
          </div>
        </div>
        <div className="right">
          <FavoriteButton id={course.id} />
        </div>
      </div>
    </FeaturedContainer>
  );
}

export default Featured;
