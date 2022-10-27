import Head from "next/head";

import Intro from "components/Landing/Intro";

import getCourses from "services/firebase/store/getCourses";
import { CourseModel, UserModel } from "utils/types/firebase";

import { HomeContainer } from "styles/home.styles";
import OurCourses from "components/Landing/OurCourses";
import ListCourses from "components/Landing/ListCourses";
import Layout from "components/Layouts";
import getUserByEmail from "services/firebase/store/getUserByEmail";
import { Override } from "utils/types/utility";
import { Meta } from "utils/types";

interface Props {
  data: {
    courses: Override<CourseModel, { instructor: UserModel | null }>[];
  };
  meta: Meta;
}
function Home({ data, meta }: Props) {
  const { courses } = data;

  return (
    <>
      <Head>
        <title key="title">{meta.title}</title>
        <meta key="desciption" name="description" content={meta.description} />
      </Head>
      <Layout>
        <HomeContainer>
          <Intro />

          <section>
            <ListCourses courses={courses} className="list" />
          </section>
        </HomeContainer>
      </Layout>
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  const courses = await getCourses({});

  const instructors: { [key: string]: UserModel | null } = {};

  await Promise.all(
    courses.map(async ({ instructor }) => {
      if (typeof instructor === "object" && instructor.email)
        instructors[instructor.email] = instructor;
      else if (typeof instructor === "string")
        instructors[instructor] = await getUserByEmail(instructor);
    })
  );

  const coursesWithInstructors = courses.map(({ instructor, ...data }) => ({
    ...data,
    instructor:
      typeof instructor === "string" ? instructors[instructor] : instructor,
  }));

  const props: Props = {
    data: { courses: coursesWithInstructors },

    meta: {
      description:
        "Primer plataforma de cursos online que utiliza tecnología web 3.0. Ayudamos a los creadores de cursos a lanzar su colección de NFT que sirve como llave de acceso a su curso online.",
      title: "Cursos online con tecnología blockchain | DL3ARN",
    },
  };

  return { props };
}
