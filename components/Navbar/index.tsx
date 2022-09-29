import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaTimes } from "react-icons/fa";
import { BiChevronRight, BiMenuAltRight, BiStar } from "react-icons/bi";
import { PrimaryButton } from "components/Buttons";
import { useAuth } from "context/firebase";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Avatar from "../Avatar";
import { Nav } from "./styled";

import Link from "next/link";

import routes from "utils/routes";
import { useRouter } from "next/router";
import useShow from "hooks/useShow";
import categories from "utils/categories";
import Logo from "components/Logo";
import { DEV_PAGE, NODE_ENV } from "constants/index";

export const NavLink = ({
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

  const [height, setHeight] = useState(0);
  const handleResize = useCallback(() => setHeight(window.innerHeight), []);
  useEffect(() => {
    setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  console.log(height);

  return (
    <>
      <Nav height={height} isBlue={!!blue_theme[router.pathname]}>
        <div className="wrapper">
          <div className="left">
            <Logo beta />

            <div className="links">
              <div>
                <NavLink href="/about">acerca de DL3ARN</NavLink>
              </div>

              <div className="categories">
                <button
                  ref={refCategoriesButton}
                  id="btn-categories"
                  onClick={toggleCategories}
                  className="link"
                >
                  Categorías
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
            {NODE_ENV === "development" && userData?.role === "user" && (
              <li>
                <NavLink href="/teaching">Trabaja con nosotros</NavLink>
              </li>
            )}
            {!isLoading && user ? (
              <>
                {userData?.role === "admin" && (
                  <li>
                    <NavLink href="/admin">Admin</NavLink>
                  </li>
                )}

                {!DEV_PAGE && (
                  <li>
                    <NavLink href="/favorites">Favoritos</NavLink>
                  </li>
                )}

                <li className="user">
                  <ConnectButton
                    chainStatus="icon"
                    accountStatus="address"
                    label="Conectar Wallet"
                    showBalance={false}
                  />

                  {DEV_PAGE && (
                    <NavLink href="/favorites">
                      <BiStar className="icon" />
                    </NavLink>
                  )}
                  <Avatar
                    to="left"
                    onClick={() => router.push(routes.profile.path)}
                    img={userData?.avatar || null}
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
              <Logo />
            </div>

            <div className="bottom">
              <div className="links">
                <p className="category">Categorias</p>
                <div className="categories">
                  {categories.map((category) => (
                    <NavLink key={category} href={`/courses/${category}`}>
                      <BiChevronRight className="icon" />
                      {category}
                    </NavLink>
                  ))}
                </div>

                {!isLoading && !user ? (
                  <>
                    <li>
                      <NavLink href={routes.landing.path}>Home</NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <NavLink href="/favorites">
                      <BiChevronRight className="icon" />
                      Favoritos
                    </NavLink>

                    {userData?.role === "admin" && (
                      <li>
                        <NavLink href="/admin">
                          <BiChevronRight className="icon" />
                          Admin
                        </NavLink>
                      </li>
                    )}
                  </>
                )}
                <NavLink href="/about">
                  <BiChevronRight className="icon" />
                  acerca de DL3ARN
                </NavLink>
              </div>

              <div className="user">
                {!isLoading ? (
                  user ? (
                    <>
                      <Avatar
                        to="right"
                        onClick={() => router.push(routes.profile.path)}
                        img={userData?.avatar || null}
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
                  )
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </Nav>
    </>
  );
}

export default Navbar;
