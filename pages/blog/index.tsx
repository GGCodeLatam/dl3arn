import Layout from "components/Layouts";
import { GetServerSideProps } from "next";
import { useCallback, useEffect, useState } from "react";
import { BlogModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import { DEV_PAGE } from "constants/index";
import authenticated from "utils/authenticated";
import getUserData from "services/firebase/store/getUserData";
import { Blogs as BlogsContainer, Container, Images } from "styles/test.styles";
import { getDocs, orderBy, query } from "firebase/firestore";
import { blogsCollection } from "services/firebase/store/collections";
import Avatar from "components/Avatar";
import Image from "next/image";
import Link from "next/link";
import BlogForm from "components/Test/BlogForm";
import Head from "next/head";
import LayoutAbout from "components/Layouts/About";
import { useAuth } from "context/firebase";

function Blogs({}: { img: string | null }) {
  const { userData } = useAuth();
  const [blogs, setBlogs] = useState<
    Override<BlogModel, { $created_at: Date }>[]
  >([]);

  const getBlogsCallback = useCallback(() => {
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
    getBlogsCallback();
  }, [getBlogsCallback]);

  return (
    <LayoutAbout>
      <Head>
        <title key="title">Blog DL3ARN</title>
      </Head>
      <Container>
        <section style={{ width: "100%", position: "relative" }}>
          {userData?.role === "admin" && <BlogForm />}

          <BlogsContainer>
            {blogs.map(
              ({ $id, images, $created_at, name, creator, content }) => (
                <Link key={name} href={`/blog/${$id}`}>
                  <a>
                    <article>
                      <div className="main-content">
                        {typeof creator === "object" ? (
                          <Avatar
                            className="avatar"
                            to="right"
                            img={creator?.avatar}
                            name={creator?.name}
                          />
                        ) : null}

                        <div className="header">
                          <h2>{name}</h2>

                          <time>
                            <div>
                              {$created_at.getHours()}:
                              {$created_at.getMinutes()}
                            </div>
                            <div className="date">
                              {$created_at.getDate()}/{$created_at.getMonth()}/
                              {$created_at.getFullYear()}
                            </div>
                          </time>
                        </div>

                        <p>{content}</p>
                      </div>
                      {!!images.length && (
                        <Images onlyOne={images.length === 1}>
                          {images.map((image) => (
                            <div
                              className="img-container"
                              key={
                                typeof image !== "string" ? image.src : image
                              }
                            >
                              <Image
                                className="img"
                                layout="fill"
                                src={
                                  typeof image !== "string" ? image.src : image
                                }
                                alt=""
                              />
                            </div>
                          ))}
                        </Images>
                      )}
                    </article>
                  </a>
                </Link>
              )
            )}
          </BlogsContainer>
        </section>
      </Container>
    </LayoutAbout>
  );
}

async function getBlogs() {
  const blogs = await getDocs(
    query(blogsCollection, orderBy("$created_at", "desc"))
  );
  return await Promise.all(
    blogs.docs.map(async (blog) => {
      const data = { ...blog.data() } as BlogModel;
      if (!data.creator || typeof data.creator !== "string") return data;
      data.creator = await getUserData(data.creator);
      data.$id = blog.id;
      return data;
    })
  );
}

export default Blogs;
