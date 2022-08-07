import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
