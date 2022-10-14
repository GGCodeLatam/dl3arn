import { HTMLProps } from "react";
import { Label } from "./styles";

interface Props extends HTMLProps<HTMLTextAreaElement> {
  label: string;
}
function Textarea({ label, ...props }: Props) {
  return (
    <Label>
      {label && <span>{label}</span>}
      <textarea {...props} />
    </Label>
  );
}

export default Textarea;
