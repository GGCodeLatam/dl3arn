import Footer from "components/Footer";
import NavbarAbout from "components/Navbar/About";
import Head from "next/head";
import { ReactNode } from "react";
import FullPage from "styles/FullContainer";

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
      <FullPage>{children}</FullPage>
      <Footer />
    </>
  );
}

export default LayoutAbout;
