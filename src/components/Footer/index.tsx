import styled from "styled-components";
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { TbBrandSpotify, TbBrandTiktok } from "react-icons/tb";
import Wave from "components/SVGs/wave";

import contact from "utils/contact.json";

const FooterContainer = styled.footer`
  position: relative;
  color: #fff;
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
    padding: 5vh 1rem 0 1rem;

    .container {
      margin: 0 auto;
      max-width: 1200px;
    }
  }
  .copyright {
    padding: 1rem 0;
    text-align: center;
    font-size: 0.85rem;
    opacity: 0.5;
  }

  .sections {
    display: flex;
    justify-content: space-between;

    section:not(:last-child) {
      border-right: 1px solid #fff2;
    }
    section {
      padding: 2rem 2rem 2rem 0;

      > h3 {
        margin: 0.5rem 0;
      }
    }
  }

  .contacts {
    list-style: none;
    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      ::before {
        content: "";
        width: 7px;
        height: 1px;
        background: #fff;
      }
    }
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
