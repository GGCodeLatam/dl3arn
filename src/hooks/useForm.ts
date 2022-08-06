import { useEffect, useState } from "react";
import { InputChange, Inputs } from "@/types/";

function useForm(initialState: Inputs) {
  const [inputs, setInputs] = useState<typeof initialState>(initialState);

  useEffect(() => {
    setInputs(initialState);
  }, [initialState]);

  const onChange = ({ target: { name, value } }: InputChange) =>
    setInputs((old) => ({ ...old, [name]: { ...old[name], value } }));

  return { inputs, onChange };
}

export default useForm;
