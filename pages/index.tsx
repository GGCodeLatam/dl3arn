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

import { HomeContainer } from "styles/home.styles";
import Image from "next/image";
import styled from "styled-components";
import breakpoints from "utils/breakpoints";

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .mobile {
    display: none;
  }
  .pc {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    .mobile {
      display: none !important;
    }
    .pc {
      display: block !important;
    }
  }
`;

const CarruselImg = ({ pc, mobile }: { pc: string; mobile: string }) => (
  <ImgContainer>
    <Image className="pc" objectFit="cover" layout="fill" src={pc} alt="" />
    <Image
      className="mobile"
      objectFit="cover"
      layout="fill"
      src={mobile}
      alt=""
    />
  </ImgContainer>
);

const sections: ReactNode[] = [
  <CarruselImg
    key="carrusel-1"
    pc="/assets/images/carrusel/1.jpg"
    mobile="/assets/images/carrusel/1-mobile.jpg"
  />,
  <CarruselImg
    key="carrusel-2"
    pc="/assets/images/carrusel/2.jpg"
    mobile="/assets/images/carrusel/2-mobile.jpg"
  />,
  <CarruselImg
    key="carrusel-3"
    pc="/assets/images/carrusel/3.jpg"
    mobile="/assets/images/carrusel/3-mobile.jpg"
  />,
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
        <Carrousel sections={sections} delay={8} startAt={0} />
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
    const { sections: s } = course;
    if (!s || typeof s !== "object") return sorted.noVideos.push(course);
    const isArray = Array.isArray(s);
    if (isArray && s.length) return sorted.videos.push(course);
    const emptyObj = Object.values(s).some(({ videos: v }) => !!v.length);
    if (emptyObj) return sorted.videos.push(course);
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
