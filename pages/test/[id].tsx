import { doc, getDoc } from "firebase/firestore";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { blogsCollection } from "services/firebase/store/collections";
import { BlogModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";

function Blog({ images, name, content }: BlogModel) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{content}</p>
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
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query as { id: string };
  if (!id) return { redirect: { destination: "/404", permanent: false } };
  const blogRef = await getDoc(doc(blogsCollection, id));
  const data = blogRef.data() as Override<BlogModel, { $id?: string }>;
  const blog: BlogModel = { $id: blogRef.id, ...data };
  return {
    props: { ...blog },
  };
};

export default Blog;
