import styled from "styled-components";

export const Alerts = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  position: fixed;
  z-index: 5555;
  bottom: 0.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: blue;

  li {
    background-color: red;
    padding: 1rem 2rem;
    width: 100%;
  }
`;

export const EmailVerify = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--dark);
  color: var(--light);
  z-index: 5555;
  text-align: center;
  padding: 0.5rem 0;

  font-weight: 400;
  font-size: 0.8rem;
`;
