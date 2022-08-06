import { InputProps } from "@/types/";
import Password from "./Password";
import { Label } from "./styles";

const inputTypes: { [key: string]: (_: InputProps) => JSX.Element } = {
  password: Password,
};

function Input({ className, label, type: inputType, ...input }: InputProps) {
  const SelectedInput = inputType ? inputTypes[inputType] : "input";

  return (
    <Label className={className}>
      {label && <span>{label}</span>}
      {SelectedInput ? (
        <SelectedInput autoComplete="off" {...input} />
      ) : (
        <input autoComplete="off" {...input} />
      )}
    </Label>
  );
}

export default Input;
