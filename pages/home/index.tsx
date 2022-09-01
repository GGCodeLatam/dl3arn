import Card from "components/Dashboard/Card";
import PrivateRoute from "components/PrivateRoute";
import {
  ContactUs,
  FeaturedPlaceholderContainer,
  HomeContainer,
} from "styles/home.styles";

import contact from "utils/contact.json";

import Placeholder from "components/Placeholders";
import Featured from "components/Dashboard/Featured";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { CourseModel } from "utils/types/firebase";
import getCourses from "services/firebase/store/getCourses";
import getDl3arn from "services/firebase/store/getDl3arn";
import getCoursesByIds from "services/firebase/store/getCoursesByIds";
import { getImage } from "services/firebase/storage";

interface Props {
  featured: CourseModel[];
  courses: CourseModel[];
}
function Home({ featured, courses }: Props) {
  const [main, ...others] = featured;
  const cards = Array.from({ length: 3 }).map(
    (_, i) => others[i] && <Card key={i} {...others[i]} />
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

          <section>
            {featured ? (
              <Featured course={main} badge />
            ) : (
              <FeaturedPlaceholder />
            )}
            <div className="cards">{cards}</div>
          </section>

          <section>
            <h2>cursos</h2>
            <ul className="list">
              {courses.map((course) => (
                <Card key={course.id} {...course} />
              ))}
            </ul>
          </section>
        </HomeContainer>
      </PrivateRoute>
    </>
  );
}

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const dl3arn = await getDl3arn("home");

  const [featured, courses] = await Promise.all([
    getCoursesByIds(dl3arn.pinned),
    getCourses({}),
  ]);

  const response: Props = {
    featured: await Promise.all(
      featured.map(async (course) => ({
        ...course,
        image: (await getImage(course.image)) || "",
      }))
    ),
    courses: (
      await Promise.all(
        courses.map(async (course) => ({
          ...course,
          image: (await getImage(course.image)) || "",
        }))
      )
    ).filter((course) =>
      featured.findIndex((f) => f.id === course.id) === -1 ? true : false
    ),
  };

  return { props: response };
}

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
