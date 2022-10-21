import Footer from "components/Footer";
import NavbarAbout from "components/Navbar/About";
import Head from "next/head";
import { ReactNode } from "react";
import styled from "styled-components";
import FullPage from "styles/FullContainer";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(var(--primary), var(--brown));
`;
interface Props {
  children: ReactNode;
}
function LayoutAbout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NavbarAbout />
      <FullPage>
        <Container />
        {children}
      </FullPage>
      <Footer />
    </>
  );
}

export default LayoutAbout;
