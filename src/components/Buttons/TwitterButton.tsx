import { AiOutlineTwitter } from "react-icons/ai";
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
  text-align: left;

  span {
    font-size: 0.8rem;
    width: 10rem;
  }
  :hover {
    background-color: #0000000a;
  }
`;
function TwitterButton() {
  const onClick = () => {
    login({}, "twitter");
  };
  return (
    <Container onClick={onClick}>
      <AiOutlineTwitter color="#1DA1F2" size={22} />{" "}
      <span>Connect with Twitter</span>
    </Container>
  );
}

export default TwitterButton;
