import { PrimaryButton } from "components/Buttons";
import { PreguntasFrecuentesContainer } from "./PreguntasFrecuentes.styles";

import { BsCheck } from "react-icons/bs";

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
          <h3>¿Qué es Ethereum 2.0?</h3>
          <p>
            A continuación, citamos dos fuentes de calidad donde podrás
            encontrar información detallada sobre Ethereum 2.0:
          </p>

          <ul>
            <li>
              <BsCheck size={24} className="icon" />
              <a>www.iproup.com</a>
            </li>
            <li>
              <BsCheck size={24} className="icon" />
              <a>www.professionalreview.com.com</a>
            </li>
          </ul>
        </section>

        <section>
          <h3>¿Los retornos son en Dólares?</h3>
          <p>
            La ganancia de la minería de cada moneda se percibe en la misma
            moneda, por lo tanto, la ganancia de la minería de Ethereum se
            deposita a la cuenta de Binance de propiedad del cliente. De todos
            modos, desde Inception Crypto también ofrecemos la posibilidad de
            acercar estos pagos de rendimiento mensual a nuestros clientes en
            dólares billete tomando la cotización del día de Ethereum a USD.
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
