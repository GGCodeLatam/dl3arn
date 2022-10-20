import Head from "next/head";
import InversionCrypto from "components/About/InversionCrypto";
import PreguntasFrecuentes from "components/About/PreguntasFrecuentes";
import { AboutContainer } from "styles/about.styles";
import LayoutAbout from "components/Layouts/About";
import { getDocs, limit, query } from "firebase/firestore";
import { coursesCollection } from "services/firebase/store/collections";

interface Props {
  meta: {
    description: string;
  };
}

function About({ meta }: Props) {
  return (
    <>
      <Head>
        <title>Sobre DL3ARN | DL3ARN</title>
        <meta key="desciption" name="description" content={meta.description} />
      </Head>

      <LayoutAbout>
        <AboutContainer>
          <div className="intro">
            <h1>Aprendizaje descentralizado</h1>

            <p>
              Nuestra mision en DL3ARN es descentralizar el aprendizaje, para
              que cada persona pueda elegir que quiere aprender y como
              aprenderlo.
            </p>

            <iframe
              width="320"
              src="https://www.youtube.com/embed/5d4T3p8J7dI"
              title="DL3ARN"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <InversionCrypto />
          <PreguntasFrecuentes />
        </AboutContainer>
      </LayoutAbout>
    </>
  );
}

export async function getServerSideProps() {
  const q = query(coursesCollection, limit(500));
  const courses = await getDocs(q);
  console.log(courses);

  const props: Props = {
    meta: {
      description:
        "Primer plataforma de cursos online que utiliza tecnología web 3.0. Ayudamos a los creadores de cursos a lanzar su colección de NFT que sirve como llave de acceso a su curso online.",
    },
  };
  return { props };
}

export default About;
