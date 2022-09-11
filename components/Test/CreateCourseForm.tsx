import { useState } from "react";
import styled from "styled-components";
import { ChangeEvent } from "react";
import CreateVideoForm from ".";

interface Inputs {
  name: string;
  instructor: {
    name: string;
  };
  description: string;
  contract: {
    address: string;
    chain: string;
  };
  rampp: {};
  opensea: string;
  score: number;
  videos: { free: boolean; videoId: string; name: string }[];
}

const initInputs = {
  name: "",
  instructor: {
    name: "",
  },
  description: "",
  contract: {
    address: "",
    chain: "",
  },
  rampp: {},
  opensea: "",
  score: 0,
  videos: [],
};

const Form = styled.div`
  .videos {
    .video {
      display: flex;
      gap: 1em;
    }
  }
`;
function CreateCourseForm() {
  const [inputs, setInputs] = useState<Inputs>(initInputs);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  const addVideo = (video: Inputs["videos"][number]) => {
    const _id = new Date().getTime();
    setInputs((old) => ({
      ...old,
      videos: [...old.videos, { ...video, _id }],
    }));
  };

  return (
    <Form>
      <input
        type="text"
        name="name"
        placeholder="Nombre del curso"
        value={inputs.name}
        onChange={onChange}
      />
      <input
        type="text"
        name="instructor"
        placeholder="Nombre del instructor"
        value={inputs.instructor.name}
        onChange={onChange}
      />
      <textarea
        placeholder="Descripcion"
        name="description"
        value={inputs.description}
        onChange={onChange}
      />

      <div>
        <h3>Contract</h3>
        <input
          type="text"
          name="address"
          placeholder="address"
          value={inputs.contract.address}
          onChange={onChange}
        />
        <input
          type="chainId"
          name="chain"
          placeholder="Chain"
          value={inputs.contract.chain}
          onChange={onChange}
        />
      </div>

      <input
        type="text"
        name="opensea"
        placeholder="OpenSea"
        value={inputs.opensea}
        onChange={onChange}
      />
      <input
        type="number"
        name="score"
        placeholder="Score"
        value={inputs.score}
        onChange={onChange}
      />

      <div>
        <h3>Videos</h3>

        <CreateVideoForm onSubmit={addVideo} />

        <ul className="videos">
          {inputs.videos.map((video, i) => (
            <li className="video" key={i}>
              <div>{video.free.toString()}</div>
              <div>{video.name}</div>
              <div>{video.videoId}</div>
            </li>
          ))}
        </ul>
      </div>

      <button type="submit">Submit</button>
    </Form>
  );
}

export default CreateCourseForm;
