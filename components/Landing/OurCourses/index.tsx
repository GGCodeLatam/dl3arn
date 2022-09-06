import { CourseModel } from "utils/types/firebase";
import Card from "../Card";
import Featured from "../Featured";

interface Props {
  main: CourseModel;
  more: CourseModel[];
}
function OurCourses({ main, more }: Props) {
  return (
    <section>
      <h2>Nuestos cursos</h2>

      <Featured course={main} badge />

      {Array.from({ length: 3 })?.map(
        (_, i) => more[i] && <Card key={i} {...more[i]} />
      )}
    </section>
  );
}

export default OurCourses;
