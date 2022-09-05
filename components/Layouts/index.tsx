import Head from "next/head";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { ReactNode } from "react";
import FullPage from "styles/FullContainer";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <FullPage>{children}</FullPage>
      <Footer />
    </>
  );
}

export default Layout;
