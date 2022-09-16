import { InversionCryptoContainer } from "./InversionCrypto.styles";
import { PrimaryButton } from "components/Buttons";

function InversionCrypto() {
  return (
    <InversionCryptoContainer>
      <h2>Creadores de cursos que confian en nosotros</h2>

      <section className="content">
        <div className="left">
          <div>
            <span>105+</span>
            <p>Cursos</p>
          </div>

          <div className="divider" />

          <div>
            <span>40+</span>
            <p>Usuarios Activos</p>
          </div>
        </div>

        <section className="right">
          <h3>Si quieres subir tu curso a nuestra plataforma contactanos!</h3>
          <PrimaryButton className="services">
            contacto@dl3arn.com
          </PrimaryButton>
        </section>
      </section>
    </InversionCryptoContainer>
  );
}

export default InversionCrypto;
