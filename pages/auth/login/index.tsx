import Input from "components/Input";
import { PrimaryButton } from "components/Buttons";

import useForm from "hooks/useForm";
import { loginInputs } from "utils/inputs";

import { Main } from "styles/auth";
import { FormEvent, useState } from "react";
import GoogleButton from "components/Buttons/GoogleButton";
import Link from "next/link";
import FacebookButton from "components/Buttons/FacebookButton";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "context/firebase";
import Layout from "components/Layouts";

function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const { inputs, onChange } = useForm(loginInputs);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const values = {
      email: inputs.email.value,
      password: inputs.password.value,
    };

    const res = await login!(values, "email");

    if (res.error) {
      setError(res.error.message);
      setTimeout(() => setError(null), 5000);
    } else {
      router.back();
    }
  };

  return (
    <>
      <Head>
        <title key="title">Login | DL3ARN </title>
      </Head>
      <Layout>
        <Main>
          <div>
            <h1>Login</h1>

            <div className="container">
              <FacebookButton />
              <GoogleButton onError={(err) => setError(err.message)} />

              <p className="separator">
                <span>Or</span>
              </p>

              <form onSubmit={onSubmit} className="form">
                <div className="inputs">
                  {Object.entries(inputs).map(([name, data]) => (
                    <Input
                      key={name}
                      name={name}
                      value={data.value}
                      onChange={onChange}
                      {...data.inputProps}
                    />
                  ))}
                </div>
                <PrimaryButton>Next</PrimaryButton>

                <Link href="/auth/change/password">
                  <a className="link">Forgot password?</a>
                </Link>
              </form>
              {error && <p className="error">{error}</p>}

              <p className="signup">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup">
                  <a className="link">Sign up</a>
                </Link>
              </p>
            </div>
          </div>
        </Main>
      </Layout>
    </>
  );
}

export default Login;
