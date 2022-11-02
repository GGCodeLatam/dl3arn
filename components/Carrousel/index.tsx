import useCarrousel, { UseCarrouselProps } from "hooks/useCarrousel";
import { HTMLProps } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CarrouselContainer } from "./Carrousel.styles";

type Omited = "ref" | "as";
type Props = Omit<HTMLProps<HTMLDivElement>, Omited> & UseCarrouselProps;

function Carrousel({ delay, pausedTime, sections, startAt, ...props }: Props) {
  const { goTo, section, next, prev, index } = useCarrousel({
    delay,
    pausedTime,
    sections,
    startAt,
  });

  return (
    <CarrouselContainer {...props}>
      <div className="abs">
        <button className="prev" onClick={prev}>
          <BiChevronLeft className="icon" size={30} />
        </button>
        <button className="next" onClick={next}>
          <BiChevronRight className="icon" size={30} />
        </button>

        <ul className="to">
          {sections.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, 25)}
              className={i === index ? "active" : ""}
            >
              <span className="dot" />
            </button>
          ))}
        </ul>
      </div>

      <section className="section">{section}</section>
    </CarrouselContainer>
  );
}

export default Carrousel;
