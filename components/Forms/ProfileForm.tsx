import { PrimaryButton } from "components/Buttons";
import Input from "components/Input";
import { useAuth } from "context/firebase";
import useForm from "hooks/useForm";
import { FormEvent } from "react";
import { Inputs } from "utils/types";

const initial: Inputs = {
  email: {
    value: "",
    inputProps: {
      type: "text",
      label: "Email",
      placeholder: "example@example.com",
    },
  },
  password: {
    value: "",
    inputProps: {
      type: "password",
      label: "New password",
      placeholder: "new password",
    },
  },
  current_password: {
    value: "",
    inputProps: {
      type: "password",
      label: "Current password",
      placeholder: "current password",
    },
  },
};

interface Props {
  className?: string;
}
function ProfileForm({ className }: Props) {
  const { updateCredentials } = useAuth();

  const { inputs, onChange } = useForm(initial);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { current_password } = inputs;
    const values = {
      email: inputs.email.value,
      password: inputs.password.value,
    };

    updateCredentials(current_password.value, values);
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      <div className="inputs">
        {Object.entries(inputs).map(([name, { value, inputProps }]) => (
          <Input
            key={name}
            name={name}
            value={value}
            onChange={onChange}
            {...inputProps}
          />
        ))}
      </div>
      <PrimaryButton className="btn">Update</PrimaryButton>
    </form>
  );
}

export default ProfileForm;
