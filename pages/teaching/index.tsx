import Layout from "components/Layouts";
import { useState } from "react";
import { TeachingContainer } from "styles/teaching.styles";

function Teaching() {
  const [inputs, setInputs] = useState({
    name: "",
    message: "",
  });

  return (
    <Layout>
      <TeachingContainer>
        <div className="head">
          <h1>
            Si quieres convertirte en un instructor de DL3ARN completa este
            formulario y lo veremos tan pronto como nos sea posible.
          </h1>
        </div>

        <form className="form">
          <label>
            <span>Nombre</span>
            <input
              type="text"
              placeholder="Tu nombre completo"
              value={inputs.name}
            />
          </label>
          <label>
            <span>Mensaje</span>
            <textarea placeholder="Tu mensaje" value={inputs.message} />
          </label>

          <p>Tu correo se carga automaticamente al mandar la solicitud.</p>
        </form>
      </TeachingContainer>
    </Layout>
  );
}

export default Teaching;
