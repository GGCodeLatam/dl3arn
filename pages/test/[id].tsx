import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { BiFullscreen } from "react-icons/bi";
import { doc, getDoc } from "firebase/firestore";
import Avatar from "components/Avatar";
import { blogsCollection } from "services/firebase/store/collections";
import getUserData from "services/firebase/store/getUserData";
import {
  BlogContainer,
  FullscreenImage,
  UserContainer,
} from "styles/blog.styles";
import { BlogModel, UserModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";

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
                onClick={() =>
                  setImg(typeof image !== "string" ? image.src : image)
                }
                className="container"
                key={typeof image !== "string" ? image.src : image}
              >
                <figure>
                  <div className="img-container">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      src={typeof image !== "string" ? image.src : image}
                      alt=""
                    />
                  </div>
                  {typeof image !== "string" && (
                    <caption>{image.caption}</caption>
                  )}
                </figure>
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
