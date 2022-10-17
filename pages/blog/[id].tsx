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
import { BlogModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import LayoutAbout from "components/Layouts/About";
import OGTags from "components/SEO";

interface Props {
  data: BlogModel;
  metadata: {
    image: string;
  };
}
function Blog({
  data: { $created_at, creator, images, name, content },
  metadata: { image },
}: Props) {
  const [img, setImg] = useState<string | null>(null);

  const date = new Date($created_at);
  const parsedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <LayoutAbout>
      <Head>
        <title key="title">{name} | DL3ARN</title>
        <OGTags image={image} />
      </Head>

      <BlogContainer>
        <h1 className="title">{name}</h1>
        <div className="metadata">
          <div className="left">
            por
            <Avatar
              className="avatar"
              isLoading={false}
              name={typeof creator === "object" ? creator?.name : ""}
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
                    <figcaption>{image.caption}</figcaption>
                  )}
                </figure>
                <div className="hover">
                  <BiFullscreen size={25} />
                </div>
              </div>
            ))}
          </ul>

          <div className="main-content">{content}</div>
        </div>

        <UserContainer>
          <Avatar
            className="avatar"
            name={(typeof creator === "object" && creator?.name) || null}
            img={typeof creator === "object" ? creator?.avatar : ""}
            to="right"
            role={typeof creator === "object" ? creator?.role : undefined}
          />
          <p className="bio">{typeof creator === "object" && creator?.bio}</p>
        </UserContainer>
      </BlogContainer>

      {img ? (
        <FullscreenImage onClick={() => setImg(null)}>
          <div className="image-container">
            <Image layout="fill" src={img} objectFit="contain" alt="" />
          </div>
        </FullscreenImage>
      ) : null}
    </LayoutAbout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query as { id: string };
  if (!id) return { redirect: { destination: "/404", permanent: false } };
  const blogRef = await getDoc(doc(blogsCollection, id));
  if (!blogRef.exists())
    return { redirect: { destination: "/404", permanent: false } };

  const data = blogRef.data() as Override<BlogModel, { $id?: string }>;
  const blog: Props["data"] = {
    $id: blogRef.id,
    ...data,
  };

  if (!blog.creator || typeof data.creator !== "string")
    return { props: { data: blog } };
  blog.creator = await getUserData(blog.creator as string);
  return {
    props: {
      data: { ...blog },
      metadata: {
        image:
          (typeof blog.images[0] === "string"
            ? blog.images[0]
            : blog.images[0]?.src) || "",
      },
    },
  };
};

export default Blog;
