import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaTimes } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { PrimaryButton } from "components/Buttons";
import { useAuth } from "context/firebase";
import { ReactNode } from "react";
import Avatar from "../Avatar";
import { Nav } from "./styled";

import Link from "next/link";

import Logo from "assets/Logo.png";
import routes from "utils/routes";
import Image from "next/image";
import { useRouter } from "next/router";
import useShow from "hooks/useShow";
import categories from "utils/categories";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link href={href}>
    <a className="link">{children}</a>
  </Link>
);

const blue_theme: { [key: string]: boolean } = {
  [routes.roadmap.path]: true,
  [routes.quienes.path]: true,
};

function Navbar() {
  const router = useRouter();

  const { data } = useAuth();
  const { user, isLoading } = data;

  const {
    state: showMenu,
    show,
    hide,
  } = useShow({ hideOnChange: [router.pathname] });

  const {
    show: showCategories,
    hide: hideCategories,
    toggle: toggleCategories,
    state: stateCategories,
  } = useShow({});

  return (
    <>
      <Nav isBlue={!!blue_theme[router.pathname]}>
        <div className="wrapper">
          <div className="left">
            <Link href={routes.landing.path}>
              <a className="logo">
                <div className="img">
                  <Image layout="fill" src={Logo} alt="dl3arn" />
                </div>
                <p className="beta">beta</p>
              </a>
            </Link>

            <div className="categories">
              <button className="link">categorias</button>
              <ul className="categories-list">
                {categories.map((category) => (
                  <li key={category}>
                    <Link href={`/courses/${category}`}>
                      <a className="link">{category}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="middle">{/*<SearchBar />*/}</div>

          <ul className="right">
            {!isLoading && user ? (
              <>
                <li>
                  <NavLink href="/favorites">Favoritos</NavLink>
                </li>

                <li>
                  <ConnectButton label="Conectar Wallet" />
                </li>

                <li>
                  <Avatar
                    onClick={() => router.push(routes.profile.path)}
                    img={user.photoURL}
                    isLoading={isLoading}
                  />
                </li>
              </>
            ) : (
              <Link href="/auth/login">
                <PrimaryButton as="a" className="login">
                  Login
                </PrimaryButton>
              </Link>
            )}
          </ul>
          <button onClick={show} className="btn open">
            <BiMenuAltRight size={20} />
          </button>
        </div>

        {showMenu ? (
          <div className="mobile">
            <button onClick={hide} className="btn close">
              <FaTimes />
            </button>

            <div className="top">
              <Link
                href={
                  !isLoading && user ? routes.home.path : routes.landing.path
                }
              >
                <a className="logo">
                  <div className="img">
                    <Image layout="fill" src={Logo} alt="dl3arn" />
                  </div>
                  <p className="beta">beta</p>
                </a>
              </Link>
            </div>

            <div className="bottom">
              {!isLoading && !user ? (
                <>
                  <li>
                    <NavLink href={routes.landing.path}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink href={routes.roadmap.path}>Roadmap</NavLink>
                  </li>
                  <li>
                    <NavLink href={routes.quienes.path}>Quienes Somos</NavLink>
                  </li>
                </>
              ) : (
                <NavLink href="/favorites">Favoritos</NavLink>
              )}

              <div className="user">
                {!isLoading && user ? (
                  <>
                    <Avatar
                      onClick={() => router.push(routes.profile.path)}
                      img={user.photoURL}
                      isLoading={isLoading}
                    />
                    <ConnectButton label="Conectar Wallet" />
                  </>
                ) : (
                  <Link href="/auth/login">
                    <PrimaryButton as="a" className="login">
                      Login
                    </PrimaryButton>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </Nav>
    </>
  );
}

export default Navbar;
