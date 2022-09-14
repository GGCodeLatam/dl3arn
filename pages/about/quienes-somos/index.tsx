import Image from "next/image";

import { Member, QuienesSomosContainer } from "styles/quienes-somos.styles";

import Franco from "assets/Quienes-somos/Franco.jpeg";
import Joan from "assets/Quienes-somos/Joan.jpeg";
import Lucio from "assets/Quienes-somos/Lucio.jpeg";
import Ignacio from "assets/Quienes-somos/Ignacio.jpg";

import LayoutAbout from "components/Layouts/About";

const members = [
  { name: "Joan Duarte", role: "Co-Founder", photo: Joan },
  { name: "Franco Quattroqui", role: "Co-Founder", photo: Franco },
  { name: "Ignacio Borzone", role: "Co-Founder", photo: Ignacio },
  { name: "Lucio Luchini", role: "Co-Founder", photo: Lucio },
];

function QuienesSomos() {
  return (
    <LayoutAbout>
      <QuienesSomosContainer>
        <div className="bg" />
        <div className="overlay" />
        <section>
          <h2>Conocé al equipo DL3ARN</h2>
          <ul className="members">
            {members.map((member) => (
              <Member key={member.name}>
                <div>
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>

                <div className="img-container">
                  <Image
                    className="img"
                    layout="fill"
                    src={member.photo}
                    alt={member.name}
                  />
                </div>
              </Member>
            ))}
          </ul>
        </section>
      </QuienesSomosContainer>
    </LayoutAbout>
  );
}

export default QuienesSomos;
