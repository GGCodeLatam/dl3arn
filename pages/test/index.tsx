import axios from "axios";
import Layout from "components/Layouts";
import CreateCourseForm from "components/Test/CreateCourseForm";
import { useAuth } from "context/firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
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

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;
function Test() {
  const [videosId, setVideosId] = useState<string[]>([]);
  const [courseId, setCourseId] = useState<string>("");
  const {
    data: { user, isLoading },
    userData,
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

  const [response, setResponse] = useState<any>(null);

  const onClick = async () => {
    if (!user) return null;

    const { data } = await axios.post("/api/mailchimp/get", {
      email: user.email,
      displayName: user.displayName,
    });

    setResponse(data);
  };

  return (
    <Layout>
      <Container>
        {!isLoading && userData?.role === "admin" && (
          <div>
            <h2>{user?.email}</h2>
            <button onClick={onClick}>Añadirme a Mailchimp</button>
            <pre>{response && JSON.stringify(response, undefined, 2)}</pre>
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default Test;
