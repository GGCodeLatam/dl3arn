import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SecondaryButton } from "components/Buttons";
import { useAuth } from "context/firebase";
import { ReactNode } from "react";
import Avatar from "../Avatar";
import { Nav, Verify } from "./styled";

import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link to={href} className="link">
    {children}
  </Link>
);

function Navbar() {
  const { data } = useAuth();
  const navigate = useNavigate();
  const { user, isLoading } = data;

  return (
    <>
      {user && !user.emailVerified && (
        <Verify>
          <p>Please verify your email</p>
          <FaTimes />
        </Verify>
      )}

      <Nav>
        <div className="wrapper">
          <div className="left">
            <Link to="/" className="logo">
              DL3arn
            </Link>
            {!isLoading && user && (
              <>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </>
            )}
          </div>

          <ul className="right">
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
              <SecondaryButton className="login">
                <Link to="/auth/login">Login</Link>
              </SecondaryButton>
            )}
          </ul>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
