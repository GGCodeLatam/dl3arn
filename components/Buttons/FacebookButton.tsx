import { AiFillFacebook } from "react-icons/ai";
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
    text-align: left;
    width: 10rem;
  }
  :hover {
    background-color: #0000000a;
  }
`;
function FacebookButton() {
  const onClick = () => {
    login({}, "facebook");
  };
  return (
    <Container onClick={onClick}>
      <AiFillFacebook color="#1877F2" size={22} />{" "}
      <span>Connect with Facebook</span>
    </Container>
  );
}

export default FacebookButton;
