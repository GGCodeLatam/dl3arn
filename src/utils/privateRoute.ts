import { GetServerSidePropsContext } from "next";
import { auth } from "services/firebase/admin";

async function privateRoute(context: GetServerSidePropsContext) {
  const { token } = context.req.cookies;

  try {
    if (!token || !(await auth.verifyIdToken(token)))
      return { props: {}, redirect: { destination: "/", permanent: false } };
  } catch (e) {
    return { props: {}, redirect: { destination: "/", permanent: false } };
  }

  return null;
}

export default privateRoute;
