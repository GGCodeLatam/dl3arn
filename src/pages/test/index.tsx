import { Container } from "styles/test.styles";

import { NODE_ENV } from "constants/index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Test() {
  const navigate = useNavigate();
  if (NODE_ENV !== "development") return navigate("");

  return (
    <Container>
      <main style={{ margin: "5vh 0 0 0" }}>
        <button className="btn primary">hola</button>
      </main>

      <footer></footer>
    </Container>
  );
}

export default Test;

function useTest() {
  const [data, setData] = useState<null>(null);

  useEffect(() => {}, []);
  useEffect(() => {}, [data]);

  return data;
}
