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
      <Navbar />
      <FullPage>{children}</FullPage>
      <Footer />
    </>
  );
}

export default Layout;
