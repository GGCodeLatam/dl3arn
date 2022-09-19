import { InformationContainer } from "components/Admin/Information.styles";
import ImageInput from "components/Input/Image";
import { useAuth } from "context/firebase";
import { ChangeEvent, FormEvent, useState } from "react";
import updateUserData from "services/firebase/store/updateUserData";
import { setLocal } from "utils/localStorage";
import { PrimaryButton } from "components/Buttons";
import { InputChange } from "utils/types";

interface Inputs {
  avatar: null | File;
  bio: string;
  name: string;
}

const MAX_LENGTH = 240;
function Information() {
  const { userData, updateUserData: contextUpdateUser } = useAuth();
  const [inputs, setInputs] = useState<Inputs>({
    avatar: null,
    bio: userData?.bio || "",
    name: userData?.name || "",
  });

  const _handleImage = ({ target: { files } }: InputChange) => {
    if (files)
      return setInputs((old) => ({ ...old, avatar: files[0] || null }));
  };
  const _handleName = ({ target: { name, value } }: InputChange) => {
    return setInputs((old) => ({ ...old, [name]: value }));
  };
  const _handleBio = ({
    target: { name, value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    if (value.length <= MAX_LENGTH)
      return setInputs((old) => ({ ...old, [name]: value }));
  };
  const _onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const updated = await updateUserData({ current: userData, update: inputs });
    setLocal("-user-data", updated);
    contextUpdateUser();
  };

  return (
    <InformationContainer>
      <form onSubmit={_onSubmit}>
        <div className="inline-flex">
          <ImageInput
            init={userData?.avatar || null}
            className="img-input"
            onChange={_handleImage}
          />
          <input
            name="name"
            placeholder="Nombre completo"
            type="text"
            onChange={_handleName}
            value={inputs.name}
          />
        </div>

        <label className="bio">
          <textarea
            name="bio"
            placeholder="Biografia"
            onChange={_handleBio}
            value={inputs.bio}
          />
          <p>
            {inputs.bio.length} / {MAX_LENGTH}
          </p>
        </label>

        <PrimaryButton noHover type="submit">
          submit
        </PrimaryButton>
      </form>

      <div></div>
    </InformationContainer>
  );
}

export default Information;
