import Head from "next/head";
import InversionCrypto from "components/About/InversionCrypto";
import PreguntasFrecuentes from "components/About/PreguntasFrecuentes";
import { AboutContainer } from "styles/about.styles";
import LayoutAbout from "components/Layouts/About";
import { getDocs, limit, query } from "firebase/firestore";
import {
  coursesCollection,
  usersCollection,
} from "services/firebase/store/collections";
import Image from "next/image";
import { ReactNode } from "react";
import Carrousel from "components/Carrousel";
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
    pc="/assets/images/carrusel/4.jpg"
    mobile="/assets/images/carrusel/4-mobile.jpg"
  />,
  <CarruselImg
    key="carrusel-2"
    pc="/assets/images/carrusel/5.jpg"
    mobile="/assets/images/carrusel/5-mobile.jpg"
  />,
  <CarruselImg
    key="carrusel-3"
    pc="/assets/images/carrusel/6.jpg"
    mobile="/assets/images/carrusel/6-mobile.jpg"
  />,
];

interface Props {
  data: {
    total_users: number;
    total_courses: number;
  };
  meta: {
    description: string;
  };
}

function About({ data: { total_courses, total_users }, meta }: Props) {
  return (
    <>
      <Head>
        <title>Sobre DL3ARN | DL3ARN</title>
        <meta key="desciption" name="description" content={meta.description} />
      </Head>

      <LayoutAbout>
        <AboutContainer>
          <div className="intro">
            <Carrousel sections={sections} delay={8} startAt={0} />
          </div>

          <InversionCrypto courses={total_courses} users={total_users} />
          <PreguntasFrecuentes />
        </AboutContainer>
      </LayoutAbout>
    </>
  );
}

export async function getStaticProps() {
  const qCourses = query(coursesCollection, limit(500));
  const qUsers = query(usersCollection, limit(1000));

  const [courses, users] = await Promise.all([
    await getDocs(qCourses),
    await getDocs(qUsers),
  ]);

  const total_courses = courses.docs.length;
  const total_users = users.docs.length;

  const props: Props = {
    data: {
      total_users,
      total_courses,
    },
    meta: {
      description:
        "Primer plataforma de cursos online que utiliza tecnología web 3.0. Ayudamos a los creadores de cursos a lanzar su colección de NFT que sirve como llave de acceso a su curso online.",
    },
  };
  return { props };
}

export default About;
