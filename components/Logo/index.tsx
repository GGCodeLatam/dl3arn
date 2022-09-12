import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { default as LogoImg } from "assets/Logo.png";

import routes from "utils/routes";

const Container = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 100%;

  .img {
    position: relative;
    filter: drop-shadow(0 0px 2px #000a);
    width: 7em;
    height: 2em;
  }
  .beta {
    font-size: 0.75em;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--primary);
  }
`;
function Logo() {
  return (
    <Link href={routes.landing.path}>
      <Container>
        <div className="img">
          <Image layout="fill" src={LogoImg} alt="dl3arn" />
        </div>
        <p className="beta">beta</p>
      </Container>
    </Link>
  );
}

export default Logo;
