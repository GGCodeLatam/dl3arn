import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { VideoModel } from "utils/types/firebase";

type VideoProps = Omit<VideoModel, "duration" | "id">;

const Form = styled.form`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 0.25em;
`;
interface Props {
  onSubmit(_: any): any;
}
function CreateVideoForm({ onSubmit }: Props) {
  const [video, setVideo] = useState<VideoProps>({
    free: false,
    name: "",
    videoId: "",
  });

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { type, name, value, checked } = target;
    return setVideo((old) => ({
      ...old,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const _onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(video);
  };

  return (
    <Form onSubmit={_onSubmit}>
      <input
        type="checkbox"
        name="free"
        checked={video.free}
        onChange={onChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Nombre del video"
        value={video.name}
        onChange={onChange}
      />
      <input
        type="text"
        name="videoId"
        placeholder="ID del video"
        value={video.videoId}
        onChange={onChange}
      />
      <button type="submit">Add video</button>
    </Form>
  );
}

export default CreateVideoForm;
