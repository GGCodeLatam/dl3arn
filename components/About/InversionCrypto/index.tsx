import { InversionCryptoContainer } from "./InversionCrypto.styles";
import { PrimaryButton } from "components/Buttons";
import Wave from "components/SVGs/wave";

interface Props {
  users: number;
  courses: number;
}
function InversionCrypto({ users, courses }: Props) {
  return (
    <InversionCryptoContainer>
      <Wave fill="#242424" className="deco top" />

      <div className="main">
        <h2>Creadores de cursos que confian en nosotros</h2>
        <section className="content">
          <div className="left">
            <div>
              <span>{courses}+</span>
              <p>Cursos</p>
            </div>

            <div className="divider" />

            <div>
              <span>{users}+</span>
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
      </div>
      <Wave fill="#242424" className="deco bottom" />
    </InversionCryptoContainer>
  );
}

export default InversionCrypto;
