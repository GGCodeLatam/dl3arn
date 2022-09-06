import { ContactUs } from "./Intro.styles";
import contact from "utils/contact.json";

function Intro() {
  return (
    <ContactUs>
      <div className="decoration">
        <div className="tr1" />
        <div className="tr2" />
      </div>
      <div className="info">
        <h1>
          Bienvenidos a la primer plataforma de cursos online con tecnología
          blockchain!
        </h1>
        <p>Si quieres subir tu curso a nuestra plataforma contactanos!</p>
        <a className="dl3arn-mail" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </div>
    </ContactUs>
  );
}

export default Intro;
