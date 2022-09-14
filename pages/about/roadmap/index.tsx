import { ReactNode, useState } from "react";
import { Card, RoadmapContainer } from "styles/roadmap.styles";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import FlowerImg from "assets/Coin-Flower.png";
import NotesImg from "assets/Notes.png";
import LightImg from "assets/Light.png";
import TeamImg from "assets/Team.png";
import Image from "next/image";
import LayoutAbout from "components/Layouts/About";

const cards = [
  { element: <Bases />, img: FlowerImg, title: "Las bases", num: "01" },
  {
    element: <Community />,
    img: LightImg,
    title: "Construir en comunidad",
    num: "01",
  },
  { element: <StepToStep />, img: NotesImg, title: "Paso a paso", num: "01" },
  { element: <Team />, img: TeamImg, title: "Nuestro equipo", num: "01" },
];

function Roadmap() {
  const [current, setCurrent] = useState<number | null>(null);

  const prev = () => {
    if (current == null) return;
    if (current > 0) setCurrent(current - 1);
    else setCurrent(3);
  };

  const next = () => {
    if (current == null) return;
    if (current < 3) setCurrent(current + 1);
    else setCurrent(0);
  };

  return (
    <LayoutAbout>
      <RoadmapContainer>
        <div className="overlay" />
        <section className="left">
          <h2>Roadmap</h2>
          <p>
            Somos <span>DLEARN</span>. Conocé nuestra historia y nuestros planes
            para el futuro
          </p>
        </section>

        <section>
          <div className="cards">
            {cards.map((card, i) => (
              <Card
                key={card.title}
                className={`card${i + 1}`}
                onClick={() => setCurrent(i)}
              >
                <div className="img">
                  <Image layout="responsive" src={card.img} alt="" />
                </div>
                <div className="title">
                  <span>0{i + 1}</span>
                  <h3>{card.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {current !== null && (
          <Wrapper
            onExit={() => setCurrent(null)}
            onPrev={prev}
            onNext={next}
            current={current}
          >
            {cards[current].element}
          </Wrapper>
        )}
      </RoadmapContainer>
    </LayoutAbout>
  );
}

interface SectionProps {
  onExit(): void;
  onPrev(): void;
  onNext(): void;
  children: ReactNode;
  current: number | null;
}

function Wrapper({ onExit, onNext, onPrev, children, current }: SectionProps) {
  return (
    <div className="popup">
      <div>
        <button className="btn exit" onClick={onExit}>
          <AiFillCloseCircle size={20} />
        </button>

        <div className="overflow">{children}</div>

        <div className="buttons">
          {current !== null && current - 1 >= 0 ? (
            <button className="btn prev" onClick={onPrev}>
              <BiChevronLeft size={20} />
            </button>
          ) : null}
          {current !== null && current + 1 <= 3 ? (
            <button className="btn next" onClick={onNext}>
              <BiChevronRight size={20} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
function Team() {
  return (
    <section>
      <h2>Equipo</h2>
      <p>
        Creemos que para que un proyecto tenga cierta legitimidad sus fundadores
        tienen que demostrar quienes son y qué hicieron para llegar a crear el
        proyecto. Lo que nosotros queremos demostrar es claridad y transparencia
        hacía las personas que están dentro del proyecto y creen en él.
      </p>
    </section>
  );
}
function StepToStep() {
  return (
    <section>
      <h2>Paso a Paso</h2>
      <p>
        Un paso adelante del otro para lograr todos los objetivos. Sueña en
        grande pero haz pasos cortos. A pesar de que nosotros tenemos ideas,
        actitud y ganas de llegar a objetivos, como metaverso, DAO, tener
        nuestro propio tokeconomics, marketplace, etc, hay que arrancar por los
        objetivos que están más cerca. Por eso nosotros arrancamos con el
        aprendizaje hacía las criptomonedas, creemos que es el punto inicial de
        este proyecto. A medida que vayamos cumpliendo los pasos que nos vamos
        proponiendo, más temprano que tarde, lograremos los objetivos más
        grandes y futuros. Algunos de los objetivos que ya cumplimos:
      </p>
      <ul>
        <li>Onboarded 5 new team members</li>
        <li>Community building activities in Discord</li>
        <li>Multiple AMAs with DeFi Frens team</li>
        <li>Banner art + initial website mockups designed</li>
        <li>Art generation pipeline solidified and tooling selected</li>
        <li>Multiple collaboration conversations in progress</li>
        <li>Website launch </li>
        <li>More internal/external AMA/office hours planned</li>
        <li>External gaming contests </li>
        <li>Collaboration rollouts </li>
      </ul>
    </section>
  );
}
function Community() {
  return (
    <section>
      <h2>Construyamos en Comunidad</h2>
      <p>
        En el mundo crypto la problemática es que la gente cuenta con muchas
        barreras a la hora de adentrarse. Estas barreras muchas veces son
        miedos, problemas, complejidades, etc. Estos obstáculos creemos que se
        superan con una comunidad que te ayude a sobreponerse. La realidad es
        que como se puede apreciar en las criptomonedas esto se puede llevar a
        cualquier aspecto de la vida cotidiana. Cuando una persona arranca algo
        nuevo que muchas veces le genera una incertidumbre, contar con una
        comunidad que entiende de eso y te puede apoyar es un beneficio gigante.
        Creemos que además la tecnología que ofrece las criptomonedas y la web3
        hace que esto sea más eficiente y posible. Por estas razones hicimos
        este proyecto.
      </p>
    </section>
  );
}
function Bases() {
  return (
    <>
      <section>
        <h2>Visión</h2>
        <p>
          Nuestra visión es lograr la descentralización del aprendizaje, que sea
          creada y propiedad de las personas.
        </p>
      </section>
      <section>
        <h2>Valores</h2>
        <p>
          El día que dejemos de aprender e innovar es cuando este mundo está
          perdido. El aprendizaje es algo que nunca se tiene que perder aunque
          uno tenga edad, experiencia, talento, contactos, etc. Innovar, aunque
          muchas veces olvidado en el mundo del aprendizaje, es lo que lleva a
          que las personas den un salto de calidad y rompan nuevas barreras.
          Ambas cosas tienen que ir de la mano.
        </p>
      </section>
      <section>
        <h2>Comunidad</h2>
        <p>
          Creemos que en comunidad se aprende mejor porque son un conjunto de
          personas que tienen el mismo fin. Además estas comunidades pueden
          definir mejor qué tipo de contenido es el que desean y los pueden
          ayudar.
        </p>
      </section>
      <section>
        <h2>Tiempo</h2>
        <p>
          Este es un proyecto grande que no se va a lograr de la noche a la
          mañana. Probablemente nunca se logre algún final ya que va a ir
          modificándose, mejorando y aprendiendo de los pasos anteriores sin
          tener una versión definitiva por más grande que sea.
        </p>
      </section>
    </>
  );
}
