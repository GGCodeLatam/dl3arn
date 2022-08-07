import Input from "components/Input";
import { PrimaryButton } from "components/Buttons";

import useForm from "hooks/useForm";
import { loginInputs } from "utils/inputs";

import { Main } from "styles/auth";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "context/firebase";
import GoogleButton from "components/Buttons/GoogleButton";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { inputs, onChange } = useForm(loginInputs);
  const navigate = useNavigate();
  const {
    data: { user, isLoading },
    login,
  } = useAuth();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && user) navigate("/dashboard");
  }, [isLoading, user, navigate]);
  if (isLoading || user) return null;

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
