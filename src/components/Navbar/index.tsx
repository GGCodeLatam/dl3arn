import { ConnectButton } from "@rainbow-me/rainbowkit";
import { PrimaryButton } from "components/Buttons";
import { useAuth } from "context/firebase";
import { ReactNode } from "react";
import Avatar from "../Avatar";
import { Nav } from "./styled";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "assets/Logo.png";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link to={href} className="link">
    {children}
  </Link>
);

const blue_theme: { [key: string]: boolean } = {
  "/": true,
  "/roadmap": true,
  "/quienes-somos": true,
};

function Navbar() {
  const { data } = useAuth();
  const navigate = useNavigate();
  const { user, isLoading } = data;
  const location = useLocation();

  return (
    <>
      <Nav isBlue={!!blue_theme[location.pathname]}>
        <div className="wrapper">
          <div className="left">
            <Link to={!isLoading && user ? "/dashboard" : "/"} className="logo">
              <img src={Logo} alt="dl3arn" />
            </Link>
          </div>

          <ul className="right">
            {!isLoading && !user && (
              <>
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li>
                  <NavLink href="/roadmap">Roadmap</NavLink>
                </li>
                <li>
                  <NavLink href="/quienes-somos">Quienes Somos</NavLink>
                </li>
              </>
            )}

            {!isLoading && user ? (
              <>
                <li>
                  <ConnectButton label="Conectar Wallet" />
                </li>

                <li>
                  <Avatar
                    onClick={() => navigate("/profile")}
                    img={user.photoURL}
                    isLoading={isLoading}
                  />
                </li>
              </>
            ) : (
              <PrimaryButton as={Link} to="/auth/login" className="login">
                Login
              </PrimaryButton>
            )}
          </ul>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
