import Image from "next/image";
import styled from "styled-components";

import OpenSeaIcon from "assets/opensea.svg";

const Container = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: max-content;
  padding: 0.75em 0;
  gap: 1rem;
  font-weight: 600;

  .img-container {
    position: relative;
    width: 2.5em;
    height: 2.5em;
  }
`;

interface Props {
  collection: string;
}
function OpenSeaButton({ collection }: Props) {
  return (
    <Container href={`https://opensea.io/collection/${collection}`}>
      <div className="img-container">
        <Image layout="fill" src={OpenSeaIcon} alt="opensea" />
      </div>{" "}
      OpenSea
    </Container>
  );
}

export default OpenSeaButton;
