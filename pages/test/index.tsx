import Layout from "components/Layouts";
import { useAuth } from "context/firebase";
import { GetServerSideProps } from "next";
import { FormEvent, useEffect, useState } from "react";
import { BlogModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import { DEV_PAGE } from "constants/index";
import authenticated from "utils/authenticated";
import getUserData from "services/firebase/store/getUserData";
import { InputChange } from "utils/types";
import { Blogs, Container, Images } from "styles/test.styles";
import { addDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import { blogsCollection } from "services/firebase/store/collections";
import Avatar from "components/Avatar";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "services/firebase";
import Image from "next/image";

interface Inputs {
  content: string;
  name: string;
  images: File[];
}
function Test({}: { img: string | null }) {
  const [blogs, setBlogs] = useState<
    Override<BlogModel, { $created_at: Date }>[]
  >([]);
  const [inputs, setInputs] = useState<Inputs>({
    images: [],
    content: "",
    name: "",
  });

  const {
    data: { user },
  } = useAuth();

  const onChange = ({ target: { files, name, value } }: InputChange) => {
    if (files) {
      setInputs((old) => ({ ...old, images: Array.from(files) }));
    } else setInputs((old) => ({ ...old, [name]: value }));
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user?.email) return null;
    const { email } = user;
    const blog: Override<BlogModel, { images: File[] }> = {
      ...inputs,
      creator: email,
      $created_at: new Date().getTime(),
    };
    const ref = await addBlog(blog);
    getBlogs().then((blogs) =>
      setBlogs(
        blogs.map((blog) => ({
          ...blog,
          $created_at: new Date(blog.$created_at),
        }))
      )
    );
  };

  useEffect(() => {
    getBlogs().then((blogs) =>
      setBlogs(
        blogs.map((blog) => ({
          ...blog,
          $created_at: new Date(blog.$created_at),
        }))
      )
    );
  }, []);
  useEffect(() => {
    console.log(blogs[0]);
  }, [blogs]);

  return (
    <Layout>
      <Container>
        <h1>Pagina de testeo</h1>

        <section style={{ width: "100%", position: "relative" }}>
          <form onSubmit={onSubmit}>
            <label>
              <span>name</span>
              <input
                name="name"
                type="text"
                value={inputs.name}
                onChange={onChange}
                placeholder="name"
              />
            </label>

            <label>
              <span>content</span>
              <input
                name="content"
                type="text"
                value={inputs.content}
                onChange={onChange}
                placeholder="content"
              />
            </label>

            <label>
              <span>image</span>
              <input type="file" onChange={onChange} multiple />
            </label>

            <button type="submit">submit</button>
          </form>

          <Images>
            {inputs.images.map((image) => (
              <li className="image" key={image.name}>
                <p>{image.name}</p>
                <div className="metadata">
                  <span className="data size">
                    {(image.size / 1024).toFixed(1)}kb
                  </span>
                  <span className="data type">{image.type}</span>
                </div>
              </li>
            ))}
          </Images>

          <Blogs>
            {blogs.map(({ images, $created_at, name, creator, content }) => (
              <article key={name}>
                {typeof creator === "object" ? (
                  <Avatar
                    className="avatar"
                    to="right"
                    img={creator?.avatar}
                    name={creator?.name}
                  />
                ) : null}
                <div className="main-content">
                  <div className="header">
                    <h2>{name}</h2>
                    <div className="images">
                      {images.map((image) => (
                        <div className="img-container" key={image}>
                          <Image
                            className="img"
                            layout="fill"
                            src={image}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                    <time>
                      <div>
                        {$created_at.getHours()}:{$created_at.getMinutes()}
                      </div>
                      <div className="date">
                        {$created_at.getDate()}/{$created_at.getMonth()}/
                        {$created_at.getFullYear()}
                      </div>
                    </time>
                  </div>
                  <p>{content}</p>
                </div>
              </article>
            ))}
          </Blogs>
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

async function getBlogs() {
  const blogs = await getDocs(
    query(blogsCollection, orderBy("$created_at", "desc"))
  );
  return await Promise.all(
    blogs.docs.map(async (blog) => {
      const data = { ...blog.data() } as BlogModel;
      if (!data.creator || typeof data.creator !== "string") return data;
      data.creator = await getUserData(data.creator);
      return data;
    })
  );
}

async function addBlog(blog: Override<BlogModel, { images: File[] }>) {
  const blogRef = doc(blogsCollection);

  const images = await Promise.all(
    blog.images.map(async (image) => {
      const storageRef = ref(
        storage,
        `images/blogs/${blogRef.id}/${image.name}`
      );
      const { ref: imageRef } = await uploadBytes(storageRef, image);
      return await getDownloadURL(imageRef);
    })
  );

  return await addDoc(blogsCollection, { ...blog, images });
}
