import Input from "components/Input";
import { PrimaryButton } from "components/Buttons";

import useForm from "hooks/useForm";
import { loginInputs } from "utils/inputs";

import { Main } from "styles/auth";
import { FormEvent, useState } from "react";
import GoogleButton from "components/Buttons/GoogleButton";
import { Link } from "react-router-dom";
import FacebookButton from "components/Buttons/FacebookButton";
import useRedirectOnAuthenticated from "hooks/useRedirectOnAuthenticated";
import { login } from "services/firebase/auth";

function Login() {
  useRedirectOnAuthenticated();

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
    } else setError(null);
  };

  return (
    <div>
      <Main>
        <div>
          <h1>Login</h1>

          <div className="container">
            <FacebookButton />
            <GoogleButton />

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

              <Link to="/auth/change/password" className="link">
                Forgot password?
              </Link>
            </form>
            {error && <p className="error">{error}</p>}

            <p className="signup">
              Don&apos;t have an account? <Link to="/auth/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default Login;
