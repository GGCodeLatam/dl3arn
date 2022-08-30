import { PrimaryButton } from "components/Buttons";
import Image from "next/image";
import { CourseModel } from "utils/types/firebase";
import { CourseIntroContainer } from "./CourseIntro.styles";

interface Props {
  imgUrl: string | null;
  name: string;
  instructor: CourseModel["instructor"];
  description: string;

  next?: () => any;
  prev?: () => any;
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
        {imgUrl && (
          <div className="img-container">
            <Image layout="fill" className="course-image" src={imgUrl} alt="" />
          </div>
        )}
        <div>
          <h2 className="course-name">{name}</h2>
          <p className="instructor">by {instructor?.name}</p>
        </div>
        <p className="description">{description}</p>
      </div>

      <div className="video-options">
        <PrimaryButton onClick={prev}>Anterior</PrimaryButton>
        <PrimaryButton onClick={next}>Siguiente</PrimaryButton>
      </div>
    </CourseIntroContainer>
  );
}

export default CourseIntro;
