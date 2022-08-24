import Card from "components/Dashboard/Card";
import CardPlaceholder from "components/Placeholders/Card";
import PrivateRoute from "components/PrivateRoute";
import useCourses from "hooks/useCourses";
import {
  DashboardContainer,
  FeaturedCourse,
} from "components/Dashboard/index.styles";
import { useEffect, useState } from "react";
import { getImage } from "services/firebase/storage";
import { Link } from "react-router-dom";

import contact from "utils/contact.json";

import Coin from "assets/Coin.png";
import { NetworkBadge } from "components/Badges";
import FavoriteButton from "components/Buttons/FavoriteButton";

function Home() {
  const {
    data: { courses, isLoading },
  } = useCourses();

  const [course, ...others] = courses;

  const [storageImage, setStorageImage] = useState("");
  useEffect(() => {
    if (course?.image)
      getImage(course.image).then((url) => setStorageImage(url));
  }, [course]);

  const cards = Array.from({ length: 3 }).map((_, i) =>
    isLoading ? (
      <CardPlaceholder key={i} />
    ) : (
      others[i] && <Card {...others[i]} />
    )
  );

  return (
    <PrivateRoute verified>
      <DashboardContainer>
        <div className="contact-us">
          <div className="decoration">
            <div className="tr1" />
            <div className="tr2" />
          </div>
          <div className="info">
            <p>Si quieres subir tu curso a nuestra plataforma contactanos!</p>
            <a className="dl3arn-mail" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
        </div>

        {course && (
          <FeaturedCourse>
            <Link to={`/course/${course.id}`}>
              {storageImage && (
                <div className="img-container">
                  <div className="badge">
                    <img src={Coin} alt="" />
                    DL3ARN
                  </div>
                  <img src={storageImage} alt="" />
                </div>
              )}
              <div className="info">
                <NetworkBadge network={course.rampp?.network} onlyIcon />
                <div>
                  <h3>{course.name}</h3>
                  <p>{course.instructor.name}</p>
                </div>
              </div>
            </Link>
            <div className="favorite">
              <FavoriteButton id={course.id} />
            </div>
          </FeaturedCourse>
        )}

        <section>
          <div className="cards">{cards}</div>
        </section>
      </DashboardContainer>
    </PrivateRoute>
  );
}

export default Home;
