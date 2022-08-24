import { FormEvent, useState } from "react";

import { Link } from "react-router-dom";

import { PrimaryButton } from "components/Buttons";
import Input from "components/Input";

import useForm from "hooks/useForm";
import { registerInputs } from "utils/inputs";
import { Main } from "styles/auth";
import GoogleButton from "components/Buttons/GoogleButton";
import FacebookButton from "components/Buttons/FacebookButton";
import useRedirectOnAuthenticated from "hooks/useRedirectOnAuthenticated";
import { signUp } from "services/firebase/auth";

function Signup() {
  const { inputs, onChange } = useForm(registerInputs);
  const [error, setError] = useState<string | null>(null);

  useRedirectOnAuthenticated();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const values = {
      email: inputs.email.value,
      password: inputs.password.value,
      validate: inputs.validate.value,
    };

    const res = await signUp(values);
    if (res.error) {
      setError(res.error.message);
      setTimeout(() => setError(null), 5000);
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <Main>
        <div>
          <form onSubmit={onSubmit} className="form">
            <h1>Sign up</h1>
            <div className="container">
              <FacebookButton />
              <GoogleButton />
              <p className="separator">
                <span>Or</span>
              </p>
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
            </div>
          </form>
          {error && <p className="error">{error}</p>}

          <p className="signup">
            Already have an account? <Link to="/auth/login">Login</Link>
          </p>
        </div>
      </Main>
    </div>
  );
}

export default Signup;
