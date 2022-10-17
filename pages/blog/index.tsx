import { useCallback, useEffect, useState } from "react";
import { BlogModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import getUserData from "services/firebase/store/getUserData";
import { Blogs as BlogsContainer, Container, Images } from "styles/test.styles";
import { getDocs, orderBy, query } from "firebase/firestore";
import { blogsCollection } from "services/firebase/store/collections";
import BlogForm from "components/Test/BlogForm";
import Head from "next/head";
import LayoutAbout from "components/Layouts/About";
import { useAuth } from "context/firebase";
import BlogsList from "components/Test/BlogList";

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
          <BlogsList blogs={blogs} />
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
      if (data.content.length > 150)
        data.content = data.content.slice(0, 150)[0];
      return data;
    })
  );
}

export default Blogs;
