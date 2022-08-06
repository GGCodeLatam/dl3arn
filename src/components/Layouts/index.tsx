import Head from "next/head";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { ReactNode } from "react";
import Hotjar from "@hotjar/browser";
import { HOTJAR_SITE_ID, HOTJAR_VERSION } from "@/constants/index";

interface Props {
  children: ReactNode;
}

try {
  if (HOTJAR_SITE_ID && HOTJAR_VERSION) {
    Hotjar.init(Number(HOTJAR_SITE_ID), Number(HOTJAR_VERSION));
  }
} catch (e) {}

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>DL3arn</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
