import Logo from "components/Logo";
import { NavLink } from "..";
import { NavbarAboutContainer } from "./styles";

function NavbarAbout() {
  return (
    <NavbarAboutContainer>
      <div className="wrapper">
        <Logo />
        <ul className="links">
          <NavLink href="/about">Sobre DL3ARN</NavLink>
          <NavLink href="/about/roadmap">Roadmap</NavLink>
          <NavLink href="/about/quienes-somos">Quienes somos</NavLink>
        </ul>
      </div>
    </NavbarAboutContainer>
  );
}

export default NavbarAbout;
