import Head from "next/head";
import InversionCrypto from "components/About/InversionCrypto";
import PreguntasFrecuentes from "components/About/PreguntasFrecuentes";
import { AboutContainer } from "styles/about.styles";
// import NuestrosValores from "components/About/NuestrosValores";

function About() {
  return (
    <>
      <Head>
        <title>Sobre DL3ARN | DL3ARN</title>
      </Head>

      <AboutContainer>
        <div className="intro">
          <h1>Aprendizaje descentralizado</h1>
          <p>
            Nuestra mision en DL3ARN es descentralizar el aprendizaje, para que
            cada persona pueda elegir que quiere aprender y como.
          </p>
        </div>

        <InversionCrypto />
        <PreguntasFrecuentes />
      </AboutContainer>
    </>
  );
}

export default About;
