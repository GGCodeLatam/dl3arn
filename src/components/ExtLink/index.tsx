import { HTMLProps, ReactNode } from "react";

interface ExtLinkProps extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
}

function ExtLink({ children, ...props }: ExtLinkProps) {
  return (
    <a {...props} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default ExtLink;
