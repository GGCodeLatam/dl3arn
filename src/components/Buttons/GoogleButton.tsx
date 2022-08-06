import { FcGoogle } from "react-icons/fc";
import { login } from "services/firebase/auth";
import styled from "styled-components";
import Button from "./Button";

const Container = styled(Button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #0002;
  background-color: transparent;
  color: #000;
  border-radius: 4px;

  span {
    font-size: 0.8rem;
  }
  :hover {
    background-color: #0000000a;
  }
`;

function GoogleButton() {
  const onClick = () => {
    login!({}, "google");
  };

  return (
    <Container onClick={onClick}>
      <FcGoogle size={20} /> <span>Connect with Google</span>
    </Container>
  );
}

export default GoogleButton;
