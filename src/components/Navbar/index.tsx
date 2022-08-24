import { ConnectButton } from "@rainbow-me/rainbowkit";
import { PrimaryButton } from "components/Buttons";
import { useAuth } from "context/firebase";
import { ReactNode } from "react";
import Avatar from "../Avatar";
import { Nav } from "./styled";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "assets/Logo.png";
import routes from "utils/routes";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link to={href} className="link">
    {children}
  </Link>
);

const blue_theme: { [key: string]: boolean } = {
  [routes.landing.path]: true,
  [routes.roadmap.path]: true,
  [routes.quienes.path]: true,
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
            <Link
              to={!isLoading && user ? routes.home.path : routes.landing.path}
              className="logo"
            >
              <img src={Logo} alt="dl3arn" />
            </Link>
          </div>

          <div>{/*<SearchBar />*/}</div>

          <ul className="right">
            {!isLoading && !user && (
              <>
                <li>
                  <NavLink href={routes.home.path}>Home</NavLink>
                </li>
                <li>
                  <NavLink href={routes.roadmap.path}>Roadmap</NavLink>
                </li>
                <li>
                  <NavLink href={routes.quienes.path}>Quienes Somos</NavLink>
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
                    onClick={() => navigate(routes.profile.path)}
                    img={user.photoURL}
                    isLoading={isLoading}
                  />
                </li>
              </>
            ) : (
              <PrimaryButton as={Link} to={routes.login.path} className="login">
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
