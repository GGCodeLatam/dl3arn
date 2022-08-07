import styled from "styled-components";

const Container = styled.div`
  height: 100%;

  main {
    display: grid;
    place-items: center;
    height: 100%;
  }
`;

function Home() {
  return (
    <Container>
      <main>
        <div>
          <h1>DL3arn</h1>
        </div>
      </main>
    </Container>
  );
}

export default Home;
