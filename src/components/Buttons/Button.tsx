import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  width: 100%;
  padding: 0.75rem 1.25rem;

  border: none;

  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: inherit;

  transition: all 0.15s;
`;
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...other }: ButtonProps) {
  return <BaseButton {...other}>{children}</BaseButton>;
}

export default Button;
