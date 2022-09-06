import { useAuth } from "context/firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { ChangeEvent, FormEvent, useState } from "react";
import { db } from "services/firebase";
import styled from "styled-components";
import { ContractModel, CourseModel, VideoModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";

type Not = "id" | "duration" | "url";
type Replace = Override<CourseModel, { contract: ContractModel | null }>;
const new_course: Omit<Replace, Not> = {
  contract: null,
  created_at: new Date().getTime(),
  instructor: { name: "Esteban" },
  description: "",
  image: "",
  name: "Curso de prueba",
  rampp: {
    abi_uri: "",
    buttonId: "",
    network: "polygon",
    proof_uri: "",
  },
  score: 0,
  total_duration: "",
  opensea: "",
  sections: {
    "Curso de prueba": {
      position: 0,
      videos: [],
    },
  },
};

const videos: Omit<VideoModel, Not>[] = [
  { free: true, name: "MAAN!", videoId: "fUiZ5vz9pUw" },
  { free: false, name: "Staying Out All Night", videoId: "BoxkNJocqWQ" },
  { free: false, name: "Medicated", videoId: "jLPvmwfklp8" },
  { free: true, name: "Young, Wild & Free", videoId: "tdwDYpWsktc" },
  { free: true, name: "So High", videoId: "uvLSj4gRq-Q" },
];

function Test() {
  const [videosId, setVideosId] = useState<string[]>([]);
  const [courseId, setCourseId] = useState<string>("");
  const {
    data: { user, isLoading },
  } = useAuth();

  const uploadVideos = async () => {
    try {
      const refs = await Promise.all(
        videos.map(
          async (video) => await addDoc(collection(db, "videos"), video)
        )
      );

      const ids = refs.map((ref) => ref.id);
      setVideosId(ids);
    } catch (e) {
      console.log(e);
    }
  };
  const removeVideos = () => {
    try {
      Promise.all(
        videosId.map(async (id) => {
          await deleteDoc(doc(db, "videos", id));
        })
      ).then(() => {
        setVideosId([]);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const createCourse = async () => {
    try {
      const course: Omit<Replace, Not> = {
        ...new_course,
        sections: {
          [new_course.name]: { videos: videosId, position: 0 },
        },
      };
      const ref = await addDoc(collection(db, "courses"), course);
      setCourseId(ref.id);
    } catch (e) {
      console.log(e);
    }
  };

  const removeCourse = async () => {
    await deleteDoc(doc(db, "courses", courseId));
    setCourseId("");
  };

  return (
    <div>
      {!isLoading && user?.email === "estebanorlandi4@gmail.com" && (
        <div>
          <h2>{user.email}</h2>
          <CreateCourse />
        </div>
      )}
    </div>
  );
}

export default Test;

const Form = styled.div``;
function CreateCourse() {
  const [inputs, setInputs] = useState<{
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
  }>({
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
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
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
        <table>
          <thead>
            <th>Is Free</th>
            <th>Nombre</th>
            <th>ID</th>
          </thead>
          {inputs.videos.map((video, i) => (
            <tr key={i}>
              <td>{video.free.toString()}</td>
              <td>{video.name}</td>
              <td>{video.videoId}</td>
            </tr>
          ))}
        </table>

        <CreateVideo
          onSubmit={(video) =>
            setInputs((old) => ({ ...old, videos: [...old.videos, video] }))
          }
        />
      </div>

      <button type="submit">Submit</button>
    </Form>
  );
}
function CreateVideo({ onSubmit }: { onSubmit(_: any): any }) {
  const [video, setVideo] = useState<{
    free: boolean;
    name: string;
    videoId: string;
  }>({
    free: false,
    name: "",
    videoId: "",
  });

  const onChange = ({
    target: { type, name, value, checked },
  }: ChangeEvent<HTMLInputElement>) => {
    if (type === "checkbox")
      return setVideo((old) => ({ ...old, [name]: checked }));
    return setVideo((old) => ({ ...old, [name]: value }));
  };
  const _onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(video);
  };

  return (
    <form onSubmit={_onSubmit}>
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
    </form>
  );
}
