import Avatar from "components/Avatar";
import { PrimaryButton } from "components/Buttons";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CourseModel, Sections } from "utils/types/firebase";
import { VideoSafeProps } from "utils/types/video";
import { CourseIntroContainer } from "./CourseIntro.styles";

type SectionOrNull = Sections<{
  position: number;
  videos: Partial<VideoSafeProps>[];
}>;

interface Props {
  imgUrl: string | null;
  name: string;
  instructor: CourseModel["instructor"] | null;
  description: string;
  sections: SectionOrNull | Partial<VideoSafeProps>[] | null;

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
  sections,
}: Props) {
  const content =
    sections &&
    typeof sections === "object" &&
    !Array.isArray(sections) &&
    Object.entries(sections).map(([key, value]) => {
      let total_m = value.videos.reduce(
        (acc, video) => acc + Number(video.duration?.m || 0),
        0
      );
      let total_s = value.videos.reduce(
        (acc, video) => acc + Number(video.duration?.s || 0),
        0
      );
      let total_h = value.videos.reduce(
        (acc, video) => acc + Number(video.duration?.h || 0),
        0
      );

      while (total_s > 60) {
        total_m += 1;
        total_s -= 60;
      }
      while (total_m > 60) {
        total_h += 1;
        total_m -= 60;
      }
      return {
        key,
        pos: value.position,
        videos: value.videos.length,
        h: total_h,
        m: total_m,
        s: total_s,
      };
    });

  const totalVideos =
    sections &&
    typeof sections === "object" &&
    !Array.isArray(sections) &&
    Object.values(sections).reduce((acc, { videos }) => acc + videos.length, 0);

  const total_duration =
    content &&
    content.reduce(
      (acc, section) => ({
        h: acc.h + section.h,
        m: acc.m + section.m,
        s: acc.s + section.s,
      }),
      {
        h: 0,
        m: 0,
        s: 0,
      }
    );

  let { videos, h, m, s } = total_duration ||
    (!content &&
      Array.isArray(sections) &&
      sections.reduce(
        (acc, video) => ({
          videos: acc.videos + 1,
          h: acc.h + Number(video.duration?.h || 0),
          m: acc.m + Number(video.duration?.m || 0),
          s: acc.s + Number(video.duration?.s || 0),
        }),
        {
          videos: 0,
          h: 0,
          m: 0,
          s: 0,
        }
      )) || { videos: 0, h: 0, m: 0, s: 0 };

  while (s > 60) {
    m += 1;
    s -= 60;
  }
  while (m > 60) {
    h += 1;
    m -= 60;
  }

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

      <div className="grid">
        {description && (
          <section>
            <h2>Descripcion</h2>
            <p className="description">{description}</p>
          </section>
        )}

        {sections && (
          <section>
            <h2>Contenido del curso</h2>
            <div className="metadata">
              {!Array.isArray(sections) && (
                <>
                  <p>{Object.keys(sections).length} secciones</p>
                  <span className="dot" />
                </>
              )}

              <p>{totalVideos || videos || 0} clases</p>

              <span className="dot" />

              <p>
                {h ? `${h}h ` : ""}
                {m || h ? `${m || 0}m ` : ""}
                {s || m ? `${s || 0}s ` : ""}
                {!h && !m && !s && 0} duración total
              </p>
            </div>
            <ul className="content-sections">
              {content &&
                content
                  ?.sort((a, b) => a.pos - b.pos)
                  .map((section, i) => (
                    <li key={section.key + i}>
                      <p className="section-name">{section.key}</p>
                      <div className="right">
                        <p>{section.videos} clases</p>
                        <span className="dot" />
                        <p>
                          {section.h ? `${section.h}h ` : ""}
                          {section.m ? `${section.m}m ` : ""}
                          {section.s ? `${section.s}s ` : ""}
                        </p>
                      </div>
                    </li>
                  ))}
            </ul>
          </section>
        )}

        {instructor && typeof instructor === "object" ? (
          <section className="instructor-data">
            <h2>Instructor</h2>
            <p className="name">{instructor.name}</p>
            <div className="more">
              <Avatar
                fontSize={{
                  img: "1.75em",
                }}
                img={instructor.avatar}
              />
              <div>
                <p className="bio">{instructor.bio}</p>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </CourseIntroContainer>
  );
}

export default CourseIntro;
