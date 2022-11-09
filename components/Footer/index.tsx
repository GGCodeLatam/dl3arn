import Logo from "components/Logo";
import Wave from "components/SVGs/wave";
import Link from "next/link";
import { BiChevronRight, BiPhone } from "react-icons/bi";
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
import {
  ContactList,
  Copyright,
  FooterContainer,
  FooterSection,
  LogoContainer,
  PageList,
} from "./Footer.styles";
import Image from "next/image";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode[];
  link?: boolean;
}

const PageLink = ({ children, href }: LinkProps) => (
  <Link href={href}>
    <a className="link">{children}</a>
  </Link>
);

const ContactLink = ({ href, children, link = true }: LinkProps) => (
  <li>
    {link ? (
      <a target="_blank" rel="noreferrer" className="contact" href={href}>
        {children}
      </a>
    ) : (
      <p>{children}</p>
    )}
  </li>
);

function Footer() {
  return (
    <FooterContainer>
      <Wave className="wave" fill="#1e1e20" />
      <div className="data">
        <div className="container">
          <div className="sections">
            <FooterSection>
              <LogoContainer>
                <div className="logos">
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
                </div>
              </LogoContainer>
            </FooterSection>

            <FooterSection>
              <h2>Páginas</h2>

              <PageList>
                <PageLink href={routes.landing.path}>
                  <BiChevronRight /> Home
                </PageLink>
                <PageLink href={routes.about.path}>
                  <BiChevronRight /> Acerca de DL3ARN
                </PageLink>
                <PageLink href={routes.roadmap.path}>
                  <BiChevronRight /> Roadmap
                </PageLink>
                <PageLink href={routes.quienes.path}>
                  <BiChevronRight /> Quienes Somos
                </PageLink>
                <PageLink href={routes.landing.path}>
                  <BiChevronRight /> Politica de privacidad
                </PageLink>
                <PageLink href={routes.landing.path}>
                  <BiChevronRight /> Terminos y condiciones
                </PageLink>
              </PageList>
            </FooterSection>

            <FooterSection>
              <h2>Contacto</h2>

              <ContactList>
                <ContactLink href={`mailto:${contact.email}`}>
                  <IoMdMailOpen className="icon" /> {contact.email}
                </ContactLink>

                <ContactLink
                  href={`https://www.instagram.com/${contact.instagram}`}
                >
                  <IoLogoInstagram className="icon" /> @{contact.instagram}
                </ContactLink>
                <ContactLink
                  href={`https://www.twitter.com/${contact.instagram}`}
                >
                  <IoLogoTwitter className="icon" /> @{contact.twitter}
                </ContactLink>
                <ContactLink
                  href={`https://www.linkedin.com/company/${contact.linkedin}`}
                >
                  <IoLogoLinkedin className="icon" /> {contact.linkedin}
                </ContactLink>
                <ContactLink link={false} href="#">
                  <BiPhone className="icon" /> +1 (786) 462-2369
                </ContactLink>
              </ContactList>
            </FooterSection>
          </div>

          <Copyright>
            DL3ARN Inc. | © 2022 – Todos los derechos reservados.
          </Copyright>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
