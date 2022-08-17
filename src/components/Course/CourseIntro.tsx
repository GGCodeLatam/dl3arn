import { CourseModel } from "utils/types/firebase";
import { CourseIntroContainer } from "./CourseIntro.styles";

interface Props {
  imgUrl: string | null;
  name: string;
  instructor: CourseModel["instructor"];
  description: string;

  next: () => any;
  prev: () => any;
}
function CourseIntro({
  description,
  imgUrl,
  instructor,
  name,
  next,
  prev,
}: Props) {
  return (
    <CourseIntroContainer>
      <div className="info">
        {imgUrl && <img className="course-image" src={imgUrl} alt="" />}
        <div>
          <h2 className="course-name">{name}</h2>
          <p className="instructor">by {instructor?.name}</p>
        </div>
        <p className="description">{description}</p>
      </div>
      <div className="video-options">
        <button onClick={prev}>Anterior</button>
        <button onClick={next}>Siguiente</button>
      </div>
    </CourseIntroContainer>
  );
}

export default CourseIntro;
