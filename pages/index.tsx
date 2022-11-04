import Head from "next/head";
import { ReactNode } from "react";

import Carrousel from "components/Carrousel";
import Intro from "components/Landing/Intro";
import Layout from "components/Layouts";
import ListCourses from "components/Landing/ListCourses";

import getCourses from "services/firebase/store/getCourses";
import getUsersByEmail from "services/firebase/store/getUsersByEmail";

import { CourseModel, UserModel } from "utils/types/firebase";
import { Meta } from "utils/types";
import { Override } from "utils/types/utility";
import { DEV_PAGE } from "constants/index";

import { HomeContainer } from "styles/home.styles";

const sections: ReactNode[] = [
  <div key={1}>Section 1</div>,
  <div key={2}>Section 2</div>,
  <div key={3}>Section 3</div>,
  <div key={4}>Section 4</div>,
];

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
        {DEV_PAGE === "true" && (
          <Carrousel sections={sections} delay={8} startAt={0} />
        )}
        <HomeContainer>
          <section>
            <h2>Los mas vendidos</h2>
            <ListCourses courses={courses} className="list" />
          </section>

          <Intro />
        </HomeContainer>
      </Layout>
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  const courses = await getCourses({});

  const emails = courses
    .filter(({ instructor }) => !!instructor && typeof instructor === "string")
    .map(({ instructor }) => instructor) as string[];

  const users = await getUsersByEmail(emails);

  const coursesWithInstructors = courses.map((course) => {
    const instructor = users.find((inst) => inst.email === course.instructor);
    if (!instructor) return course;
    return { ...course, instructor };
  });

  const sorted: { videos: CourseModel[]; noVideos: CourseModel[] } = {
    videos: [],
    noVideos: [],
  };
  coursesWithInstructors.forEach((course) => {
    const { sections } = course;
    if (typeof sections !== "object") return sorted.noVideos.push(course);
    if (Array.isArray(sections) && sections.length)
      return sorted.videos.push(course);
    if (Object.values(sections).some(({ videos }) => !!videos.length))
      return sorted.videos.push(course);
    return sorted.noVideos.push(course);
  });

  const props: Props = {
    data: {
      courses: [...sorted.videos, ...sorted.noVideos],
    },

    meta: {
      description:
        "Primer plataforma de cursos online que utiliza tecnología web 3.0. Ayudamos a los creadores de cursos a lanzar su colección de NFT que sirve como llave de acceso a su curso online.",
      title: "Cursos online con tecnología blockchain | DL3ARN",
    },
  };

  return { props };
}
