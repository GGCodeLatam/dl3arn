import { GetServerSidePropsContext } from "next";
import Head from "next/head";

import Card from "components/Landing/Card";

import Intro from "components/Landing/Intro";
import Placeholder from "components/Placeholders";

import getCourses from "services/firebase/store/getCourses";
import getDl3arn from "services/firebase/store/getDl3arn";
import getCoursesByIds from "services/firebase/store/getCoursesByIds";
import { getImage } from "services/firebase/storage";

import { CourseModel } from "utils/types/firebase";

import {
  FeaturedPlaceholderContainer,
  HomeContainer,
} from "styles/home.styles";
import OurCourses from "components/Landing/OurCourses";
import Categories from "components/Landing/Categories";

interface Props {
  data: {
    featured: CourseModel[];
    courses: CourseModel[];
  };
  meta: { description: string; title: string };
}
function Home({ data, meta }: Props) {
  const { featured, courses } = data;
  const [main, ...more] = featured;

  return (
    <>
      <Head>
        <title key="title">{meta.title}</title>
        <meta key="desciption" name="description" content={meta.description} />
      </Head>
      <HomeContainer>
        <Intro />
        <OurCourses main={main} more={more} />

        <section>
          <h2>Cursos</h2>

          <ul className="list">
            {courses.map((course) => (
              <Card key={course.id} {...course} />
            ))}
          </ul>
        </section>
      </HomeContainer>
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

  const props: Props = {
    data: {
      featured: await Promise.all(
        featured.map(async (course) => ({
          ...course,
          image: await getImage(course.image),
        }))
      ),
      courses: (
        await Promise.all(
          courses.map(async (course) => ({
            ...course,
            image: await getImage(course.image),
          }))
        )
      ).filter((course) =>
        featured.findIndex((f) => f.id === course.id) === -1 ? true : false
      ),
    },

    meta: {
      description:
        "Primer plataforma de cursos online que utiliza tecnología web 3.0. Ayudamos a los creadores de cursos a lanzar su colección de NFT que sirve como llave de acceso a su curso online.",
      title: "Cursos online con tecnología blockchain | DL3ARN",
    },
  };

  return { props };
}
