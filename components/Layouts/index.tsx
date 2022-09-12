import Head from "next/head";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { ReactNode } from "react";
import FullPage from "styles/FullContainer";
import Script from "next/script";

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
      <Script
        id="hotjar"
        dangerouslySetInnerHTML={{
          __html: `
(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3084503,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
      <Navbar />
      <FullPage>{children}</FullPage>
      <Footer />
    </>
  );
}

export default Layout;
