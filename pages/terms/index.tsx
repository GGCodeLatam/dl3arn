import Layout from "components/Layouts";
import Head from "next/head";
import styled from "styled-components";

const Container = styled.main`
  width: 90%;

  min-width: 300px;
  max-width: 720px;
  margin: 0 auto;

  ul,
  li,
  p {
    color: #777;
  }
  ul,
  p {
    font-size: 0.9em;
  }

  a {
    color: #24f;
    text-decoration: underline;
  }

  p {
    margin: 0.5em 0;
    line-height: 1.5em;
  }

  h1 {
    font-size: 1.5em;
    margin: 2rem 0 0 0;
  }
  h2 {
    font-size: 1em;
  }
  h3 {
    font-size: 0.85em;
  }

  ul {
    padding: 0 1em;
  }
  li {
    padding: 0.25em 1em;
  }

  section {
    margin: 2em 0;
  }
`;

function Terms() {
  return (
    <Layout>
      <Head>
        <title key="title">Terminos y condiciones | DL3ARN</title>
      </Head>
      <Container>
        <h1>Términos y condiciones</h1>
        <div>
          <p>¡Bienvenido a DL3ARN!</p>
          <p>
            Estos términos y condiciones describen las reglas y regulaciones
            para el uso del sitio web de DL3ARN, ubicado en
            https://www.dl3arn.com.
          </p>
          <p>
            Al acceder a este sitio web, asumimos que aceptas estos términos y
            condiciones. No continúes usando DL3ARN si no estás de acuerdo con
            todos los términos y condiciones establecidos en esta página.
          </p>
        </div>

        <section>
          <h2>Cookies:</h2>
          <p>
            El sitio web utiliza cookies para ayudar a personalizar tu
            experiencia en línea. Al acceder a DL3ARN, aceptaste utilizar las
            cookies necesarias.
          </p>
          <p>
            Una cookie es un archivo de texto que un servidor de páginas web
            coloca en tu disco duro. Las cookies no se pueden utilizar para
            ejecutar programas o enviar virus a tu computadora. Las cookies se
            te asignan de forma exclusiva y solo un servidor web en el dominio
            que emitió la cookie puede leerlas.
          </p>
          <p>
            Podemos utilizar cookies para recopilar, almacenar y rastrear
            información con fines estadísticos o de marketing para operar
            nuestro sitio web. Tienes la capacidad de aceptar o rechazar cookies
            opcionales. Hay algunas cookies obligatorias que son necesarias para
            el funcionamiento de nuestro sitio web. Estas cookies no requieren
            tu consentimiento ya que siempre funcionan. Ten en cuenta que al
            aceptar las cookies requeridas, también aceptas las cookies de
            terceros, que podrían usarse a través de servicios proporcionados
            por terceros si utilizas dichos servicios en nuestro sitio web, por
            ejemplo, una ventana de visualización de video proporcionada por
            terceros e integrada en nuestro sitio web.
          </p>
        </section>
        <section>
          <h2>Licencia:</h2>
          <p>
            A menos que se indique lo contrario, DL3ARN y/o sus licenciantes
            poseen los derechos de propiedad intelectual de todo el material en
            DL3ARN. Todos los derechos de propiedad intelectual son reservados.
            Puedes acceder desde DL3ARN para tu uso personal sujeto a las
            restricciones establecidas en estos términos y condiciones.
          </p>
          <section>
            <h3>No debes:</h3>
            <ul>
              <li>Copiar o volver a publicar material de DL3ARN</li>
              <li>Vender, alquilar o sublicenciar material de DL3ARN</li>
              <li>Reproducir, duplicar o copiar material de DL3ARN</li>
              <li>Redistribuir contenido de DL3ARN</li>
            </ul>
          </section>
          <p>Este acuerdo comenzará el fecha presente.</p>
          <p>
            Partes de este sitio web ofrecen a los usuarios la oportunidad de
            publicar e intercambiar opiniones e información en determinadas
            áreas. DL3ARN no filtra, edita, publica ni revisa los comentarios
            antes de su presencia en el sitio web. Los comentarios no reflejan
            los puntos de vista ni las opiniones de DL3ARN, sus agentes y/o
            afiliados. Los comentarios reflejan los puntos de vista y opiniones
            de la persona que publica. En la medida en que lo permitan las leyes
            aplicables, DL3ARN no será responsable de los comentarios ni de
            ninguna responsabilidad, daños o gastos causados ​​o sufridos como
            resultado de cualquier uso o publicación o apariencia de comentarios
            en este sitio web
          </p>
          <p>
            DL3ARN se reserva el derecho de monitorear todos los comentarios y
            eliminar los que puedan considerarse inapropiados, ofensivos o que
            incumplan estos Términos y Condiciones
          </p>
          <section>
            <h3>Garantizas y declaras que:</h3>
            <ul>
              <li>
                Tienes derecho a publicar comentarios en nuestro sitio web y
                tienes todas las licencias y consentimientos necesarios para
                hacerlo;
              </li>
              <li>
                Los comentarios no invaden ningún derecho de propiedad
                intelectual, incluidos, entre otros, los derechos de autor,
                patentes o marcas comerciales de terceros;
              </li>
              <li>
                Los comentarios no contienen ningún material difamatorio,
                calumnioso, ofensivo, indecente o ilegal de otro modo, que sea
                una invasión de la privacidad.
              </li>
              <li>
                Los comentarios no se utilizarán para solicitar o promover
                negocios o actividades comerciales personalizadas o presentes o
                actividades ilegales.
              </li>
            </ul>
          </section>
          <p>
            Por la presente, otorgas a DL3ARN una licencia no exclusiva para
            usar, reproducir, editar y autorizar a otros a usar, reproducir y
            editar cualquiera de tus comentarios en todas y cada una de las
            formas, formatos, o medios.
          </p>
        </section>
        <section>
          <h3>Hipervínculos a nuestro contenido:</h3>
          <p>
            Las siguientes organizaciones pueden vincularse a nuestro sitio web
            sin aprobación previa por escrito:
          </p>
          <ul>
            <li>Agencias gubernamentales;</li>
            <li>Motores de búsqueda;</li>
            <li>Organizaciones de noticias</li>;
            <li>
              Los distribuidores de directorios en línea pueden vincularse a
              nuestro sitio web de la misma manera que hacen hipervínculos a los
              sitios web de otras empresas que figuran en la lista; y Empresas
              acreditadas en todo el sistema, excepto que soliciten
              organizaciones sin fines de lucro, centros comerciales de caridad
              y grupos de recaudación de fondos de caridad que no pueden hacer
              hipervínculos a nuestro sitio web.
            </li>
          </ul>
          <p>
            Estas organizaciones pueden enlazar a nuestra página de inicio, a
            publicaciones o a otra información del sitio siempre que el enlace:
            (a) no sea engañoso de ninguna manera; (b) no implique falsamente
            patrocinio, respaldo o aprobación de la parte vinculante y sus
            productos y/o servicios; y (c) encaja en el contexto del sitio de la
            parte vinculante.
          </p>
          <p>
            Podemos considerar y aprobar otras solicitudes de enlaces de los
            siguientes tipos de organizaciones:
          </p>
          <ul>
            <li>
              fuentes de información de consumidores y/o empresas comúnmente
              conocidas;
            </li>
            <li>sitios de la comunidad .com;</li>
            <li>
              asociaciones u otros grupos que representan organizaciones
              benéficas;
            </li>
            <li>distribuidores de directorios en línea;</li>
            <li>portales de Internet;</li>
            <li>
              firmas de contabilidad, derecho y consultoría; y instituciones
              educativas y asociaciones comerciales.
            </li>
          </ul>
          <p>
            Aprobaremos las solicitudes de enlace de estas organizaciones si:
            (a) el enlace no nos haría vernos desfavorablemente a nosotros
            mismos ni a nuestras empresas acreditadas; (b) la organización no
            tiene registros negativos con nosotros; (c) el beneficio para
            nosotros de la visibilidad del hipervínculo compensa la ausencia de
            DL3ARN; y (d) el enlace está en el contexto de información general
            de recursos.
          </p>
          <p>
            Estas organizaciones pueden enlazar a nuestra página de inicio
            siempre que el enlace: (a) no sea engañoso de ninguna manera; (b) no
            implique falsamente patrocinio, respaldo o aprobación de la parte
            vinculante y sus productos o servicios; y (c) encaja en el contexto
            del sitio de la parte vinculante.
          </p>
          <p>
            Si eres una de las organizaciones enumeradas en el párrafo 2 y estás
            interesada en vincularte a nuestro sitio web, debes informarnos
            enviando un correo electrónico a DL3ARN. Incluye tu nombre, el
            nombre de tu organización, la información de contacto, así como la
            URL de tu sitio, una lista de las URL desde las que tienes la
            intención de vincular a nuestro sitio web y una lista de las URL de
            nuestro sitio a las que te gustaría acceder. Espera 2-3 semanas para
            recibir una respuesta.
          </p>
          <p>
            Las organizaciones aprobadas pueden hacer hipervínculos a nuestro
            sitio web de la siguiente manera:
          </p>
          <ul>
            <li>Mediante el uso de nuestro nombre corporativo; o</li>
            <li>
              Mediante el uso del localizador uniforme de recursos al que se
              está vinculando; o
            </li>
            <li>
              Usar cualquier otra descripción de nuestro sitio web al que está
              vinculado que tenga sentido dentro del contexto y formato del
              contenido en el sitio de la parte vinculante.
            </li>
          </ul>
          <p>
            No se permitirá el uso del logotipo de DL3ARN u otro material
            gráfico para vincular sin un acuerdo de licencia de marca comercial.
          </p>
        </section>
        <section>
          <h3>Responsabilidad del contenido:</h3>
          <p>
            No seremos responsables de ningún contenido que aparezca en tu sitio
            web. Aceptas protegernos y defendernos contra todas las
            reclamaciones que se presenten en tu sitio web. Ningún enlace(s)
            debe aparecer en ningún sitio web que pueda interpretarse como
            difamatorio, obsceno o criminal, o que infrinja, de otra manera
            viole o defienda la infracción u otra violación de los derechos de
            terceros.
          </p>
        </section>
        <section>
          <h3>Reserva de derechos:</h3>
          <p>
            Nos reservamos el derecho de solicitar que elimines todos los
            enlaces o cualquier enlace en particular a nuestro sitio web.
            Apruebas eliminar de inmediato todos los enlaces a nuestro sitio web
            cuando se solicite. También nos reservamos el derecho de modificar
            estos términos y condiciones y su política de enlaces en cualquier
            momento. Al vincular continuamente a nuestro sitio web, aceptas
            estar vinculado y seguir estos términos y condiciones de
            vinculación.
          </p>
        </section>
        <section>
          <h3>Eliminación de enlaces de nuestro sitio web:</h3>
          <p>
            Si encuentras algún enlace en nuestro sitio que sea ofensivo por
            cualquier motivo, puedes contactarnos e informarnos en cualquier
            momento. Consideraremos las solicitudes para eliminar enlaces, pero
            no estamos obligados a hacerlo ni a responder directamente.
          </p>
          <p>
            No nos aseguramos de que la información de este sitio web sea
            correcta. No garantizamos su integridad o precisión, ni prometemos
            asegurarnos de que el sitio web permanezca disponible o que el
            material en el sitio se mantenga actualizado.
          </p>
        </section>
        <section>
          <h3>Exención de responsabilidad:</h3>
          <p>
            En la medida máxima permitida por la ley aplicable, excluimos todas
            las representaciones, garantías y condiciones relacionadas con
            nuestro sitio web y el uso de este. Nada en este descargo de
            responsabilidad:
          </p>
          <ul>
            <li>
              limitará o excluirá nuestra responsabilidad o la tuya por muerte o
              lesiones personales;
            </li>
            <li>
              limitará o excluirá nuestra responsabilidad o la tuya por fraude o
              tergiversación fraudulenta;
            </li>
            <li>
              limitará cualquiera de nuestras responsabilidades o las tuyas de
              cualquier manera que no esté permitida por la ley aplicable; o
            </li>
            <li>
              excluirá cualquiera de nuestras responsabilidades o las tuyas que
              no puedan estar excluidas según la ley aplicable.
            </li>
          </ul>
          <p>
            Las limitaciones y prohibiciones de responsabilidad establecidas en
            esta sección y en otras partes de este descargo de responsabilidad:
            (a) están sujetas al párrafo anterior; y (b) regirá todas las
            responsabilidades que surjan en virtud de la exención de
            responsabilidad, incluidas las responsabilidades que surjan en el
            contrato, en agravio y por incumplimiento de la obligación legal.
          </p>
          <p>
            Siempre que el sitio web y la información y los servicios en el
            sitio se proporcionen de forma gratuita, no seremos responsables de
            ninguna pérdida o daño de cualquier naturaleza.
          </p>
        </section>
      </Container>
    </Layout>
  );
}

export default Terms;
