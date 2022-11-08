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
import { DEV_PAGE } from "constants/index";

const CarruselImg = ({ src }: { src: string }) => (
  <div style={{ width: "100%", height: "100%", position: "relative" }}>
    <Image objectFit="cover" layout="fill" src={src} alt="" />
  </div>
);

const sections: ReactNode[] = [
  <CarruselImg key="carrusel-1" src="/assets/images/carrusel/4.jpg" />,
  <CarruselImg key="carrusel-2" src="/assets/images/carrusel/5.jpg" />,
  <CarruselImg key="carrusel-3" src="/assets/images/carrusel/6.jpg" />,
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
            {DEV_PAGE === "true" ? (
              <Carrousel sections={sections} delay={8} startAt={0} />
            ) : null}
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
