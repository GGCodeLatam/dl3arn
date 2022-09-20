import { CourseModel, UserModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import Card from "../Card";
import Featured from "../Featured";

type CourseType = Override<CourseModel, { instructor: UserModel | null }>;
interface Props {
  main: CourseType;
  more: CourseType[];
}
function OurCourses({ main, more }: Props) {
  return (
    <section>
      <h2>Nuestros cursos</h2>

      <Featured course={main} badge />

      {Array.from({ length: 3 })?.map(
        (_, i) => more[i] && <Card key={i} {...more[i]} />
      )}
    </section>
  );
}

export default OurCourses;
