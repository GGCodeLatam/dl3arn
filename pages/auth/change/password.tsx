import Layout from "components/Layouts";
import { sendPasswordResetEmail } from "firebase/auth";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { auth } from "services/firebase";
import { InputChange } from "utils/types";

const style = { display: "grid", placeItems: "center" };
function ChangePassword() {
  const [email, setEmail] = useState("");

  const reset = (e: FormEvent) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch((err: any) => {
        const { code, message } = err;
      });
  };

  const handleEmail = ({ target: { name, value } }: InputChange) => {
    setEmail(value);
  };

  return (
    <>
      <Head>
        <title key="title">Reestablecer la contraseña | DL3ARN</title>
      </Head>
      <Layout>
        <div style={style}>
          <form onSubmit={reset}>
            <input
              onChange={handleEmail}
              value={email}
              type="text"
              placeholder="email"
            />
            <button type="submit">submit</button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default ChangePassword;
