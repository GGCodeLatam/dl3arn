import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  main {
    height: calc(100vh - var(--nav-size));
  }
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>DL3arn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: "grid", placeItems: "center" }}>
        <div>
          <h1>DL3arn</h1>
        </div>
      </main>
    </Container>
  );
};

export default Home;
