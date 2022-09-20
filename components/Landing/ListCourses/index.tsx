import { HTMLProps } from "react";
import { CourseModel, UserModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import Card from "../Card";

type CourseType = Override<CourseModel, { instructor: UserModel | null }>;

interface Props extends HTMLProps<HTMLUListElement> {
  courses: CourseType[];
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
