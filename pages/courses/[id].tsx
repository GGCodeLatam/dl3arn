import Head from "next/head";

import Card from "components/Landing/Card";

import { CourseModel, UserModel } from "utils/types/firebase";
import { NextContext } from "utils/types/next";
import { CategoryContainer } from "styles/category.styles";
import getCoursesByCategory from "services/firebase/store/getCoursesByCategory";
import Layout from "components/Layouts";
import { Override } from "utils/types/utility";
import getUserByEmail from "services/firebase/store/getUserByEmail";

interface Props {
  courses: Override<CourseModel, { instructor: UserModel | null }>[];
  category: string;
  meta: {
    title: string;
    description: string;
  };
}
function Category({ category, courses, meta }: Props) {
  return (
    <>
      <Head>
        <title key="title">{meta.title}</title>
        <meta key="desciption" name="description" content={meta.description} />
      </Head>

      <Layout>
        <CategoryContainer>
          <h1>
            Los mejores cursos sobre{" "}
            <span className="category">{category}</span>
          </h1>

          <div className="list">
            {courses.map((course) => (
              <Card key={course.id} {...course} />
            ))}
          </div>
        </CategoryContainer>
      </Layout>
    </>
  );
}

export default Category;

type Context = NextContext<{ query: { id: string } }>;
export const getServerSideProps = async (context: Context) => {
  const { id } = context.query;
  const courses = await getCoursesByCategory(id);

  if (!courses.length)
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };

  const capitalized_category = id
    .split(" ")
    .map((word) => {
      const [first, ...others] = word.split("");
      return [first.toUpperCase(), ...others].join("");
    })
    .join(" ");

  const props: Props = {
    courses: await Promise.all(
      courses.map(async (course) => ({
        ...course,
        instructor:
          typeof course.instructor === "string"
            ? await getUserByEmail(course.instructor)
            : course.instructor,
      }))
    ),
    category: capitalized_category,
    meta: {
      title: `Los mejores cursos de ${capitalized_category} | DL3ARN`,
      description: `Obten los mejores cursos de ${id}`,
    },
  };
  return {
    props,
  };
};
