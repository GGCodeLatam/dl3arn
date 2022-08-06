import Head from "next/head";
import Router from "next/router";

import { Container } from "styles/test.styles";

import { NODE_ENV } from "../../constants";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import privateRoute from "utils/privateRoute";

function Test() {
  if (NODE_ENV !== "development") return Router.back();

  return (
    <Container>
      <Head>
        <title>DL3arn | Test page</title>
      </Head>

      <main style={{ margin: "5vh 0 0 0" }}>
        <button className="btn primary">hola</button>
      </main>

      <footer></footer>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isUnauthenticated = await privateRoute(context);
  if (isUnauthenticated) return isUnauthenticated;
  return { props: {} };
};

export default Test;

function useTest() {
  const [data, setData] = useState<null>(null);

  useEffect(() => {}, []);
  useEffect(() => {}, [data]);

  return data;
}
