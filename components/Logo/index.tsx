import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { default as LogoImg } from "assets/Logo.png";

import routes from "utils/routes";
import { HTMLProps } from "react";

const Container = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;

  .img-container {
    position: relative;
    width: 7em;
    height: 2em;

    .img {
      object-fit: cover;
      object-position: center;
      transform: scale(125%);
      display: block;
      margin: 0 auto;
    }
  }
  .beta {
    font-size: 0.75em;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--primary);
  }
`;
interface Props extends HTMLProps<HTMLAnchorElement> {}
function Logo(props: Props) {
  return (
    <Link href={routes.landing.path}>
      <Container className={props.className}>
        <div className="img-container">
          <Image className="img" layout="fill" src={LogoImg} alt="dl3arn" />
        </div>
        <p className="beta">beta</p>
      </Container>
    </Link>
  );
}

export default Logo;
