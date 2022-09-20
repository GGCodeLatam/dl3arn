import { PrimaryButton } from "components/Buttons";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CourseModel } from "utils/types/firebase";
import { CourseIntroContainer } from "./CourseIntro.styles";

interface Props {
  imgUrl: string | null;
  name: string;
  instructor: CourseModel["instructor"];
  description: string;

  next?: null | (() => any);
  prev?: null | (() => any);
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
          <p className="instructor">
            by {typeof instructor === "string" ? instructor : instructor?.name}
          </p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="video-options">
        {prev && (
          <PrimaryButton onClick={prev}>
            <BiChevronLeft size={20} />
          </PrimaryButton>
        )}
        {next && (
          <PrimaryButton onClick={next}>
            <BiChevronRight size={20} />
          </PrimaryButton>
        )}
      </div>
    </CourseIntroContainer>
  );
}

export default CourseIntro;
