import styled from "styled-components";

import OpenSeaIcon from "assets/opensea.svg";
import { imageParse } from "utils";

const Container = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: max-content;
  padding: 1rem;
  gap: 1rem;
  font-weight: 600;

  img {
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
      <img src={imageParse(OpenSeaIcon)} alt="opensea" /> OpenSea
    </Container>
  );
}

export default OpenSeaButton;
