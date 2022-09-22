import Avatar from "components/Avatar";
import { PrimaryButton } from "components/Buttons";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CourseModel } from "utils/types/firebase";
import { CourseIntroContainer } from "./CourseIntro.styles";

interface Props {
  imgUrl: string | null;
  name: string;
  instructor: CourseModel["instructor"] | null;
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
  console.log(instructor);
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

      {instructor && typeof instructor === "object" ? (
        <section className="instructor-data">
          <Avatar
            to="right"
            img={instructor.avatar}
            name={instructor.name}
            email={instructor.email}
          />
          <p className="description">{instructor.bio}</p>
        </section>
      ) : null}
    </CourseIntroContainer>
  );
}

export default CourseIntro;
