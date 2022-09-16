import { PrimaryButton } from "components/Buttons";
import { PreguntasFrecuentesContainer } from "./PreguntasFrecuentes.styles";

function PreguntasFrecuentes() {
  return (
    <PreguntasFrecuentesContainer>
      <h2>Preguntas Frecuentes</h2>

      <p>
        Presentamos aquí una guía de preguntas y respuestas que ayudan a
        despejar dudas de forma sencilla. No dejes de contactarnos en caso que
        requieras mas información o surjan nuevas inquietudes.
      </p>

      <div className="columns">
        <section>
          <h3>¿Qué es DL3ARN?</h3>
          <p>
            Una plataforma de multiples cursos online que utiliza la tecnología
            blockchain para ayudar a los creadores de cursos a lograr nuevas
            metas.
          </p>
        </section>

        <section>
          <h3>¿Quienes pueden subir un curso?</h3>
          <p>
            Cualquier persona que desea enseñar algo. Cualquier categoría es
            aceptada en esta plataforma.
          </p>
        </section>
        <section>
          <h3>¿En qué redes se puede lanzar el NFTs?</h3>
          <p>
            Ethereum y Polygon. Buscamos expandirnos a mas redes proximamente.
          </p>
        </section>
        <section>
          <h3>¿Cuánto cuesta usar DL3ARN?</h3>
          <p>
            La filosofía de DL3ARN es ganar cuando vos ganas. Por esas razones,
            subir el curso es gratis. DL3ARN cobra un 5% cuando se venden los
            NFT en el lanzamiento y un 2.5% por la venta del NFT en el
            marketplace
          </p>
        </section>
        <section>
          <h3>
            ¿Una vez que lanzó la colección de NFTs para mi curso, se puede
            comprar en otros marketplaces?
          </h3>
          <p>
            DL3ARN crea los NFTs en la blockchain deseada por el creador.
            Cualquier marketplace que muestre colecciones de esa blockchain va a
            poder comerciar tu colección.
          </p>
        </section>
      </div>

      <PrimaryButton className="more-questions">
        Leer más preguntas
      </PrimaryButton>
    </PreguntasFrecuentesContainer>
  );
}

export default PreguntasFrecuentes;
