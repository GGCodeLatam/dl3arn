import Wave from "components/SVGs/wave";

import contact from "utils/contact.json";
import { FooterContainer } from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <Wave className="wave" fill="#1e1e20" />
      <div className="data">
        <div className="container">
          <h3>DL3ARN</h3>

          <div className="sections">
            <section>
              <h3>Contacto</h3>
              <ul className="contacts">
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>
                  <a href={`https://www.instagram.com/${contact.instagram}`}>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={`https://www.twitter.com/${contact.instagram}`}>
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.youtube.com/channel/${contact.youtube}`}
                  >
                    YouTube
                  </a>
                </li>
                <li>WhatsApp: {contact.whatsapp}</li>
              </ul>
            </section>
          </div>

          <p className="copyright">
            DL3ARN | © 2022 – Todos los derechos reservados.
          </p>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
