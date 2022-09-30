import Logo from "components/Logo";
import Wave from "components/SVGs/wave";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdMailOpen,
} from "react-icons/io";
import Polygon from "assets/networks/matic.svg";
import Ethereum from "assets/networks/eth.svg";

import contact from "utils/contact.json";
import routes from "utils/routes";
import { FooterContainer } from "./Footer.styles";
import Image from "next/image";

function Footer() {
  return (
    <FooterContainer>
      <Wave className="wave" fill="#1e1e20" />
      <div className="data">
        <div className="container">
          <div className="sections">
            <section className="logo">
              <Logo className="logo-img" />

              <div className="icons">
                <div className="icon-container">
                  <Image
                    layout="fill"
                    className="icon"
                    src={Polygon}
                    alt="Polygon"
                  />
                </div>
                <div className="icon-container">
                  <Image
                    layout="fill"
                    className="icon"
                    src={Ethereum}
                    alt="Ethereum"
                  />
                </div>
              </div>
            </section>

            <section>
              <h2>Paginas</h2>
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
              <h2>Contacto</h2>
              <ul className="contacts">
                <li>
                  <a className="contact" href={`mailto:${contact.email}`}>
                    <IoMdMailOpen className="icon" /> {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="contact"
                    href={`https://www.instagram.com/${contact.instagram}`}
                  >
                    <IoLogoInstagram className="icon" /> @{contact.instagram}
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="contact"
                    href={`https://www.twitter.com/${contact.instagram}`}
                  >
                    <IoLogoTwitter className="icon" /> @{contact.twitter}
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="contact"
                    href={`https://www.linkedin.com/company/${contact.linkedin}`}
                  >
                    <IoLogoLinkedin className="icon" />
                    {contact.linkedin}
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
