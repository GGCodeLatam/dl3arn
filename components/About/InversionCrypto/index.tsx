import { InversionCryptoContainer } from "./InversionCrypto.styles";
import { PrimaryButton } from "components/Buttons";

function InversionCrypto() {
  return (
    <InversionCryptoContainer>
      <h2>La inversíon Crypto de menor riesgo</h2>

      <section className="content">
        <div className="left">
          <p>
            <span>105+</span> Placas Activas
          </p>

          <div className="divider" />

          <div>
            <span>40+</span>
            <p>Clientes</p>
          </div>
        </div>

        <div className="right">
          <h3>Los rigs son propiedad del inversor</h3>
          <p>
            Nos encargamos de todo: adquirí tu rig con nosotros y comenzá a
            minar
          </p>
          <PrimaryButton className="services">Servicios</PrimaryButton>
        </div>
      </section>
    </InversionCryptoContainer>
  );
}

export default InversionCrypto;
