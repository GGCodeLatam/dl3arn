import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(97vh - var(--nav-size));
  display: grid;
  padding: var(--nav-size) 0 !important;
`;

function FullPage({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}

export default FullPage;
// chat online hubspot
