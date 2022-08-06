import styled from "styled-components";
import Button from "./Button";

export const PrimaryButton = styled(Button)`
  background-color: var(--primary);
  color: #fff;

  :hover {
    background-color: var(--dark-primary);
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: #fff;
  border: 1px solid var(--dark);
  color: var(--dark);

  :hover {
    background-color: var(--primary);
    border: 1px solid var(--primary);
    color: #fff;
  }
`;

export const SimpleButton = styled(Button)`
  text-decoration: underline;

  :hover {
    box-shadow: 0 0.25rem 0.5rem #0002;
  }
`;
