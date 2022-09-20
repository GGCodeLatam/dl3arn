import Logo from "components/Logo";
import Wave from "components/SVGs/wave";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io";

import contact from "utils/contact.json";
import routes from "utils/routes";
import { FooterContainer } from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <Wave className="wave" fill="#1e1e20" />
      <div className="data">
        <div className="container">
          <div className="sections">
            <Logo />
            <section>
              <nav className="pages">
                <Link href={routes.landing.path}>
                  <a className="link">
                    <BiChevronRight /> Home
                  </a>
                </Link>
                <Link href={routes.about.path}>
                  <a className="link">
                    <BiChevronRight /> Acerca de DL3ARN
                  </a>
                </Link>
                <Link href={routes.roadmap.path}>
                  <a className="link">
                    <BiChevronRight /> Roadmap
                  </a>
                </Link>
                <Link href={routes.quienes.path}>
                  <a className="link">
                    <BiChevronRight /> Quienes Somos
                  </a>
                </Link>
              </nav>
            </section>
            <section>
              <ul className="contacts">
                <li>
                  <a className="contact" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    className="contact"
                    href={`https://www.instagram.com/${contact.instagram}`}
                  >
                    <IoLogoInstagram /> @{contact.instagram}
                  </a>
                </li>
                <li>
                  <a
                    className="contact"
                    href={`https://www.twitter.com/${contact.instagram}`}
                  >
                    <IoLogoTwitter /> @{contact.twitter}
                  </a>
                </li>
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
