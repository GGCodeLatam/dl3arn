import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SecondaryButton } from "components/Buttons";
import { useAuth } from "context/firebase";
import { ReactNode } from "react";
import Avatar from "../Avatar";
import { Nav, Verify } from "./styled";

import { FaTimes } from "react-icons/fa";
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
      {user && !user.emailVerified && (
        <Verify>
          <p>Please verify your email</p>
          <FaTimes />
        </Verify>
      )}

      <Nav isBlue={!!blue_theme[location.pathname]}>
        <div className="wrapper">
          <div className="left">
            <Link to="/" className="logo">
              <img src={Logo} alt="dl3arn" />
            </Link>
            {!isLoading && user && (
              <>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </>
            )}
          </div>

          <ul className="right">
            <li>
              <NavLink href="roadmap">Roadmap</NavLink>
            </li>
            <li>
              <NavLink href="quienes-somos">Quienes Somos</NavLink>
            </li>

            {!isLoading && user ? (
              <>
                <li>
                  <ConnectButton />
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
              <SecondaryButton as={Link} to="/auth/login" className="login">
                Login
              </SecondaryButton>
            )}
          </ul>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
