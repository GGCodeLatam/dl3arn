import Card from "components/Dashboard/Card";
import CardPlaceholder from "components/Placeholders/Card";
import PrivateRoute from "components/PrivateRoute";
import useCourses from "hooks/useCourses";
import {
  ContactUs,
  FeaturedPlaceholderContainer,
  HomeContainer,
} from "styles/home.styles";

import contact from "utils/contact.json";

import Placeholder from "components/Placeholders";
import Featured from "components/Dashboard/Featured";
import Head from "next/head";

function Home() {
  const {
    data: { courses, isLoading },
  } = useCourses();

  const [course, ...others] = courses;

  const cards = Array.from({ length: 3 }).map((_, i) =>
    isLoading ? (
      <CardPlaceholder key={i} />
    ) : (
      others[i] && <Card key={i} {...others[i]} />
    )
  );

  return (
    <>
      <Head>
        <title key="title">DL3ARN | Home</title>
      </Head>
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
            <Featured course={course} badge />
          ) : (
            <FeaturedPlaceholder />
          )}

          <section>
            <h2>Cursos</h2>
            <div className="cards">{cards}</div>
          </section>
        </HomeContainer>
      </PrivateRoute>
    </>
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
