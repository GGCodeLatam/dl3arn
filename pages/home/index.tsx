import Card from "components/Dashboard/Card";
import CardPlaceholder from "components/Placeholders/Card";
import PrivateRoute from "components/PrivateRoute";
import useCourses from "hooks/useCourses";
import {
  ContactUs,
  FeaturedCourse,
  FeaturedPlaceholderContainer,
  HomeContainer,
} from "styles/home.styles";
import { useEffect, useState } from "react";
import { getImage } from "services/firebase/storage";
import Link from "next/link";

import contact from "utils/contact.json";

import Coin from "assets/Coin.png";
import { NetworkBadge } from "components/Badges";
import FavoriteButton from "components/Buttons/FavoriteButton";
import Placeholder from "components/Placeholders";
import Image from "next/image";

function Home() {
  const {
    data: { courses, isLoading },
  } = useCourses();

  const newCourses = [...courses];
  const [course, ...others] = newCourses.reverse();

  const [storageImage, setStorageImage] = useState<string | null>("");
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
      <HomeContainer>
        <ContactUs>
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
        </ContactUs>

        {course ? (
          <FeaturedCourse>
            <Link href={`/course/${course.id}`}>
              <a className="header-container">
                {storageImage ? (
                  <div>
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
                      DL3ARN
                    </div>
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
          </FeaturedCourse>
        ) : (
          <FeaturedPlaceholder />
        )}

        <section>
          <h2>Cursos</h2>
          <div className="cards">{cards}</div>
        </section>
      </HomeContainer>
    </PrivateRoute>
  );
}

export default Home;

function FeaturedPlaceholder() {
  return (
    <FeaturedPlaceholderContainer>
      <Placeholder width="100%" height="240px" />
      <div className="info">
        <Placeholder width="3.5rem" height="3.5rem" />
        <div>
          <Placeholder width="25%" height="2rem" />
          <Placeholder width="20%" height="1.5rem" />
        </div>
      </div>
    </FeaturedPlaceholderContainer>
  );
}
