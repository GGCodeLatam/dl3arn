import { HTMLProps } from "react";
import { CourseModel } from "utils/types/firebase";
import Card from "../Card";

interface Props extends HTMLProps<HTMLUListElement> {
  courses: CourseModel[];
}
function ListCourses({ courses, ...props }: Props) {
  return (
    <ul {...props}>
      {courses.map((course) => (
        <Card key={course.id} {...course} />
      ))}
    </ul>
  );
}

export default ListCourses;
