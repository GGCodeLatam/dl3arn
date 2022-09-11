import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaTimes } from "react-icons/fa";
import { BiChevronRight, BiMenuAltRight } from "react-icons/bi";
import { PrimaryButton } from "components/Buttons";
import { useAuth } from "context/firebase";
import { ReactNode, useEffect, useRef } from "react";
import Avatar from "../Avatar";
import { Nav } from "./styled";

import Link from "next/link";

import Logo from "assets/Logo.png";
import routes from "utils/routes";
import Image from "next/image";
import { useRouter } from "next/router";
import useShow from "hooks/useShow";
import categories from "utils/categories";

const NavLink = ({
  children,
  href,
  onClick,
}: {
  onClick?(_: any): any;
  children: ReactNode;
  href: string;
}) => (
  <Link href={href}>
    <a onClick={onClick} className="link">
      {children}
    </a>
  </Link>
);

const blue_theme: { [key: string]: boolean } = {
  [routes.roadmap.path]: true,
  [routes.quienes.path]: true,
};

function Navbar() {
  const router = useRouter();

  const { data, userData } = useAuth();
  const { user, isLoading } = data;

  const {
    state: showMenu,
    show,
    hide,
  } = useShow({ hideOnChange: [router.pathname] });

  const {
    state: stateCategories,
    hide: hideCategories,
    toggle: toggleCategories,
  } = useShow({});

  const refCategoriesContainer = useRef<HTMLUListElement>(null);
  const refCategoriesButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const target = e.target as Node;
      const isButton = refCategoriesButton.current?.isSameNode(target);
      const isCategory = refCategoriesButton.current?.isSameNode(target);
      if (!isButton && !isCategory) hideCategories();
    };

    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, [refCategoriesContainer, refCategoriesButton]);

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

            <div className="links">
              <div className="categories">
                <button
                  ref={refCategoriesButton}
                  id="btn-categories"
                  onClick={toggleCategories}
                  className="link"
                >
                  Categorias
                </button>

                {stateCategories && (
                  <ul ref={refCategoriesContainer} className="categories-list">
                    {categories.map((category) => (
                      <li key={category}>
                        <NavLink
                          onClick={hideCategories}
                          href={`/courses/${category}`}
                        >
                          {category}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
                    role={userData?.role}
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
              <div className="links">
                {!isLoading && !user ? (
                  <>
                    <li>
                      <NavLink href={routes.landing.path}>Home</NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <p className="category">Categorias</p>
                    <div className="categories">
                      {categories.map((category) => (
                        <NavLink key={category} href={`/courses/${category}`}>
                          <BiChevronRight className="icon" />
                          {category}
                        </NavLink>
                      ))}
                    </div>

                    <NavLink href="/favorites">
                      <BiChevronRight className="icon" />
                      Favoritos
                    </NavLink>
                  </>
                )}
              </div>

              <div className="user">
                {!isLoading && user ? (
                  <>
                    <Avatar
                      onClick={() => router.push(routes.profile.path)}
                      img={user.photoURL}
                      isLoading={isLoading}
                      role={userData?.role}
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
