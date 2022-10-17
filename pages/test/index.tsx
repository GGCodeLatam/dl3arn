import Layout from "components/Layouts";
import { GetServerSideProps } from "next";
import { DEV_PAGE } from "constants/index";
import authenticated from "utils/authenticated";
import getUserData from "services/firebase/store/getUserData";
import { Container } from "styles/test.styles";

import { useEffect, useState } from "react";
import { BlogModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import { getDocs, orderBy, query } from "firebase/firestore";
import { blogsCollection } from "services/firebase/store/collections";
import RichTextEditor from "components/RichTextEditor";

type Blogs = Override<BlogModel, { $created_at: Date }>[];

function Test() {
  const [blogs, setBlogs] = useState<Blogs>([]);

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

  return (
    <Layout>
      <Container>
        <h1>Pagina de testeo</h1>

        <section style={{ width: "100%", position: "relative" }}>
          <RichTextEditor />
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

async function getBlogs() {
  const q = query(blogsCollection, orderBy("$created_at", "desc"));
  const blogs = await getDocs(q);

  return await Promise.all(
    blogs.docs.map(async (blog) => {
      const data = { ...blog.data() } as BlogModel;
      if (!data.creator || typeof data.creator !== "string") return data;
      data.creator = await getUserData(data.creator);
      data.$id = blog.id;
      if (data.content.length > 150)
        data.content = `${data.content.slice(0, 150).trim()}...`;
      return data;
    })
  );
}

export default Test;
