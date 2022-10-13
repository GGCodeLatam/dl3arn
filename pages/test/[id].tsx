import Avatar from "components/Avatar";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { blogsCollection } from "services/firebase/store/collections";
import getUserData from "services/firebase/store/getUserData";
import styled from "styled-components";
import { BlogModel, UserModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";

const Container = styled.div`
  padding: 2em 2.5em;
  background-color: #0001;
  width: 75%;
  margin: 1em auto;
`;

function Blog({ $created_at, creator, images, name, content }: BlogModel) {
  const user = creator as UserModel;
  const date = new Date($created_at);
  const parsedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return (
    <Container>
      <h1>{name}</h1>
      <div>
        <Avatar isLoading={false} name={user.name} to="right" />
        <time>{parsedDate}</time>
      </div>

      <ul>
        {images.map((image) => (
          <div key={image}>
            <Image
              width={50}
              height={50}
              objectFit="cover"
              objectPosition="center"
              src={image}
              alt=""
            />
          </div>
        ))}
      </ul>

      <p>{content}</p>
    </Container>
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
