import { ReactNode } from "react";
import styled from "styled-components";

import OpenSeaIcon from "assets/opensea.svg";
import { imageParse } from "utils";

interface Props {
  collection: string;
  children?: ReactNode;
  className?: string;
}
function OpenSeaButton({ collection, children, className }: Props) {
  return (
    <a
      className={className}
      href={`https://opensea.io/collection/${collection}`}
    >
      {children || (
        <>
          <img src={imageParse(OpenSeaIcon)} alt="opensea" /> OpenSea
        </>
      )}
    </a>
  );
}

export default styled(OpenSeaButton)`
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
