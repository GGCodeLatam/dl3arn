import { useState } from "react";
import { HiEye } from "react-icons/hi";
import styled from "styled-components";
import { InputChange, InputProps } from "utils/types";

const Container = styled.div`
  display: flex;
  .toggle {
    padding: 0 1rem;
    background-color: transparent;
  }
`;

function Password({ onChange, ...others }: InputProps) {
  const [show, setShow] = useState(false);
  const toggleType = () => setShow((old) => !old);
  const handleChange = (e: InputChange) => {
    onChange!(e);
  };
  return (
    <Container>
      <input
        {...others}
        onChange={handleChange}
        type={show ? "text" : "password"}
      />
      <button type="button" onClick={toggleType} className="toggle">
        <HiEye />
      </button>
    </Container>
  );
}

export default Password;
