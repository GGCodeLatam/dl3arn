import axios from "axios";
import Layout from "components/Layouts";
import { useAuth } from "context/firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { GetServerSideProps } from "next";
import { useCallback, useEffect, useState } from "react";
import { db, storage } from "services/firebase";
import styled from "styled-components";
import { ContractModel, CourseModel, VideoModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import { getDownloadURL, ref } from "firebase/storage";
import { DEV_PAGE } from "constants/index";
import updateUserData from "services/firebase/store/updateUserData";
import authenticated from "utils/authenticated";
import getUserData from "services/firebase/store/getUserData";

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

  > h1 {
    font-size: 1em;
    margin: 0 0 2em 0;
  }
  section > h2 {
    font-size: 0.8em;
  }

  .video {
    width: 100%;
    aspect-ratio {
    }
  }
`;
function Test({}: { img: string | null }) {
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

  const [mailFetch, setMailFetch] = useState<{ error: any; data: any }>({
    error: null,
    data: null,
  });

  const onClick = async () => {
    if (!user) return null;

    const { data } = await axios.post<{ error: null; data: null }>(
      "/api/mailchimp/add",
      {
        email: user.email,
        displayName: user.displayName,
      }
    );

    setMailFetch(data);
  };

  const [vid, setVid] = useState<{
    src: string | null;
    error: { message: string } | null;
  }>({ src: "", error: null });

  const promise = useCallback(async () => {
    try {
      const contract_example = "0xabcf11489bdef";
      const path = `videos/private/${contract_example}/dl3arn-2-2022-07-28_19.20.22.mp4`;
      const url = await getDownloadURL(ref(storage, path));

      setVid((old) => ({ ...old, src: url, error: null }));
    } catch (e: any) {
      const { message, code, name } = e as {
        message: string;
        code: string;
        name: string;
      };

      if (code === "storage/unauthorized")
        setVid((old) => ({
          ...old,
          src: null,
          error: { message: "Compra el NFT para poder ver este curso :)" },
        }));
    }
  }, []);

  useEffect(() => {
    promise();
  }, [promise]);

  const addNFT = async () => {
    // const contract_example = "0xabcf11489bdef";
    // await updateUserData({ update: { contracts: [contract_example] } });
    // promise();
  };

  const removeNFT = async () => {
    // await updateUserData({ update: { contracts: [] } });
    // promise();
  };

  return (
    <Layout>
      <Container>
        <h1>Pagina de testeo</h1>
        <section style={{ width: "100%", position: "relative" }}>
          <h2>Simular compra de NFT</h2>

          <div>
            <button onClick={addNFT}>Añadir NFT</button>
            <br />
            <button onClick={removeNFT}>Eliminar NFT</button>
          </div>

          {vid.src && (
            <video
              className="video"
              src={vid.src}
              title=""
              onMouseOutCapture={(e) => {
                e.stopPropagation();
              }}
              controls={false}
            />
          )}

          {vid.error && <p>{vid.error.message}</p>}
        </section>
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (DEV_PAGE === "true") return { props: {} };

  const { __user_token } = context.req.cookies as { __user_token?: string };

  const user = await authenticated({ token: __user_token });
  const userData = await getUserData((user && user?.email) || "");

  if (userData?.role === "admin") return { props: {} };

  return { redirect: { permanent: false, destination: "/" } };
};

export default Test;
