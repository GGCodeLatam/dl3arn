import CreateCourseForm from "components/Test/CreateCourseForm";
import { useAuth } from "context/firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "services/firebase";
import getUserData from "services/firebase/store/getUserData";
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

  return (
    <Container>
      {!isLoading && userData?.role === "admin" && (
        <div>
          <h2>{user?.email}</h2>
          <CreateCourseForm />
        </div>
      )}
    </Container>
  );
}

export default Test;
