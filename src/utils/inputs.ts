import { Inputs } from "@/types/useForm";
import { AUTH_EMAIL, AUTH_PASSWORD } from "constants/";

type Input = Inputs[string];

const email: Input = {
  value: AUTH_EMAIL || "",
  inputProps: {
    placeholder: "Email",
    type: "email",
  },
};

const password: Input = {
  value: AUTH_PASSWORD || "",
  inputProps: {
    placeholder: "Password",
    type: "password",
  },
};

const validate: Input = {
  value: AUTH_PASSWORD || "",
  inputProps: {
    placeholder: "Verification",
    type: "password",
  },
};

export const loginInputs: Inputs = {
  email,
  password,
};

export const registerInputs: Inputs = {
  email,
  password,
  validate,
};
