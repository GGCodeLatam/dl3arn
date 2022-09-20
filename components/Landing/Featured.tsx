import Link from "next/link";
import Image from "next/image";
import Coin from "assets/Coin.png";

import { NetworkBadge } from "components/Badges";
import { CourseModel, UserModel } from "utils/types/firebase";
import FavoriteButton from "components/Buttons/FavoriteButton";
import Placeholder from "components/Placeholders";
import { FeaturedContainer } from "./Featured.styles";
import Avatar from "components/Avatar";
import { Override } from "utils/types/utility";

type CourseType = Override<CourseModel, { instructor: UserModel | null }>;
interface Props {
  badge?: boolean;
  course: CourseType;
}
function Featured({ badge, course }: Props) {
  const banner =
    typeof course.image === "string"
      ? course.image
      : course?.image?.banner || "";
  return (
    <FeaturedContainer>
      <Link href={`/course/${course.url}`}>
        <a className="header-container">
          {course.image ? (
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
                  src={banner}
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
            {course.instructor && typeof course.instructor !== "string" && (
              <Avatar
                fontSize={{ img: ".65em", name: ".75em" }}
                to="right"
                img={course.instructor.avatar}
                name={course.instructor.name}
                rounded
              />
            )}
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
