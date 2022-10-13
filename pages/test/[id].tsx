import Avatar from "components/Avatar";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { BiFullscreen } from "react-icons/bi";
import { blogsCollection } from "services/firebase/store/collections";
import getUserData from "services/firebase/store/getUserData";
import styled from "styled-components";
import { BlogContainer, FullscreenImage } from "styles/blog.styles";
import { BlogModel, UserModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";

const UserContainer = styled.div`
  width: 75%;
  margin: 1.5em auto 0 auto;

  .avatar {
    font-size: 0.8rem;
  }
  .bio {
    margin: 0.75rem 0 0 0;
  }
`;

function Blog({ $created_at, creator, images, name, content }: BlogModel) {
  const [img, setImg] = useState<string | null>(null);

  const user = creator as UserModel;
  const date = new Date($created_at);
  const parsedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <>
      <Head>
        <title key="title">{name} | DL3ARN</title>
      </Head>

      <BlogContainer>
        <h1 className="title">{name}</h1>
        <div className="metadata">
          <div className="left">
            por
            <Avatar
              className="avatar"
              isLoading={false}
              name={user.name}
              to="right"
            />
          </div>
          <time>{parsedDate}</time>
        </div>

        <div className="content">
          <ul className="images">
            {images.map((image) => (
              <div
                onClick={() => setImg(image)}
                className="img-container"
                key={image}
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  src={image}
                  alt=""
                />
                <div className="hover">
                  <BiFullscreen size={25} />
                </div>
              </div>
            ))}
          </ul>

          <p>{content}</p>
        </div>
      </BlogContainer>

      {creator && typeof creator === "object" ? (
        <UserContainer>
          <Avatar
            className="avatar"
            name={creator.name}
            to="right"
            role={creator.role}
          />
          <p className="bio">{creator.bio}</p>
        </UserContainer>
      ) : null}

      {img ? (
        <FullscreenImage onClick={() => setImg(null)}>
          <div className="image-container">
            <Image layout="fill" src={img} objectFit="contain" alt="" />
          </div>
        </FullscreenImage>
      ) : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query as { id: string };
  if (!id) return { redirect: { destination: "/404", permanent: false } };
  const blogRef = await getDoc(doc(blogsCollection, id));
  const data = blogRef.data() as Override<BlogModel, { $id?: string }>;
  const blog: BlogModel = { $id: blogRef.id, ...data };
  if (!blog.creator || typeof data.creator !== "string")
    return { props: { ...blog } };
  blog.creator = await getUserData(blog.creator as string);
  return {
    props: { ...blog },
  };
};

export default Blog;
