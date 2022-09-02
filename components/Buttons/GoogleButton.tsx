import { useAuth } from "context/firebase";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
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

interface Props {
  onError(_: any): any;
}
function GoogleButton({ onError }: Props) {
  const { login } = useAuth();
  const router = useRouter();

  const onClick = async () => {
    const res = await login!({}, "google");
    if (!res.error) return router.back();
    return onError(res.error);
  };

  return (
    <Container type="button" onClick={onClick}>
      <FcGoogle size={20} /> <span>Connect with Google</span>
    </Container>
  );
}

export default GoogleButton;
