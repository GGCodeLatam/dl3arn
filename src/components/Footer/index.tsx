import styled from "styled-components";
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { TbBrandSpotify, TbBrandTiktok } from "react-icons/tb";
import ExtLink from "components/ExtLink";
import Wave from "components/SVGs/wave";

const Container = styled.footer`
  position: relative;
  color: #fff;
  text-align: center;
  display: flex;
  flex-flow: column;
  gap: 0;

  .wave {
    width: 100%;
    transform: translate(0, 1px);
  }
  .data {
    background-color: #1e1e20;
    position: relative;
    padding: 5vh 1rem;
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 1rem 0;
  }
`;

const size = 24;
const contacts = [
  {
    element: <FiInstagram size={size} />,
    href: "https://www.instagram.com/inceptionacademia/",
  },
  {
    element: <FiTwitter size={size} />,
    href: "https://twitter.com/InceptionAcade",
  },
  {
    element: <FiYoutube size={size} />,
    href: "https://www.youtube.com/channel/UC0QkL-tbU4GZbo_wbE2DDow",
  },
  {
    element: <TbBrandSpotify size={size} />,
    href: "https://open.spotify.com/show/6T6im07qzGXdzznjdsoO4a",
  },
  {
    element: <TbBrandTiktok size={size} />,
    href: "https://www.tiktok.com/@inceptionacademia",
  },
];
function Footer() {
  return (
    <Container>
      <Wave className="wave" fill="#1e1e20" />
      <div className="data">
        <div className="wrapper">
          <h3>DL3ARN</h3>
        </div>

        <div className="contacts">
          {contacts.map((contact, i) => (
            <ExtLink key={contact.href} href={contact.href}>
              {contact.element}
            </ExtLink>
          ))}
        </div>

        <p>DL3ARN | © 2022 – Todos los derechos reservados.</p>
      </div>
    </Container>
  );
}

export default Footer;
