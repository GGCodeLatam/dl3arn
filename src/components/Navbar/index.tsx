import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SecondaryButton } from "components/Buttons";
import { useAuth } from "context/firebase";
import Link from "next/link";
import Router from "next/router";
import { ReactNode } from "react";
import Avatar from "../Avatar";
import { Nav, Verify } from "./styled";

import { FaTimes } from "react-icons/fa";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link href={href}>
    <a className="link">{children}</a>
  </Link>
);

function Navbar() {
  const { data } = useAuth();
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
            <Link href="/">
              <a className="logo">DL3arn</a>
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
                    onClick={() => Router.push("/profile")}
                    img={user.photoURL}
                    isLoading={isLoading}
                  />
                </li>
              </>
            ) : (
              <SecondaryButton className="login">
                <Link href="/auth/login">
                  <a>Login</a>
                </Link>
              </SecondaryButton>
            )}
          </ul>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
