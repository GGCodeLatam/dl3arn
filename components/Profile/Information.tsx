import { InformationContainer } from "components/Admin/Information.styles";
import ImageInput from "components/Input/Image";
import { useAuth } from "context/firebase";
import { FormEvent, useEffect, useState } from "react";
import updateUserData from "services/firebase/store/updateUserData";
import { setLocal } from "utils/localStorage";
import { InputChange } from "utils/types";

interface Inputs {
  image: null | File;
}

function Information() {
  const {
    data: { user },
    userData,
    updateUserData: contextUpdateUser,
  } = useAuth();
  const [inputs, setInputs] = useState<Inputs>({
    image: null,
  });

  const _onChange = ({ target: { name, value, files } }: InputChange) => {
    if (files) setInputs((old) => ({ ...old, image: files[0] }));
  };
  const _onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const updated = await updateUserData(userData, { avatar: inputs.image });
    setLocal("-user-data", updated);
    contextUpdateUser();
  };

  return (
    <InformationContainer>
      <form onSubmit={_onSubmit}>
        <ImageInput
          init={userData?.avatar || user?.photoURL}
          className="img-input"
          onChange={_onChange}
        />
        <input placeholder="Nombre completo" type="text" />
        <textarea placeholder="Biografia"></textarea>
        <button type="submit">submit</button>
      </form>

      <div></div>
    </InformationContainer>
  );
}

export default Information;
