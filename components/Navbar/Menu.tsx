import styled from "styled-components";
import Link from "next/link";
import { ReactNode } from "react";

const MenuContainer = styled.div``;
interface Props {
  links: { href: string; name: string }[];
}
function Menu({ links }: Props) {
  return (
    <MenuContainer>
      {links.map((link, i) => (
        <li key={`link-${link.href}-${i}`}>
          <NavLink href={link.href} text={link.name} />
        </li>
      ))}
    </MenuContainer>
  );
}

export default Menu;

function NavLink({ text, href }: { text: ReactNode; href: string }) {
  return (
    <Link href={href}>
      <a className="link">{text}</a>
    </Link>
  );
}
