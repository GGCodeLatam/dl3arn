import { Member, QuienesSomosContainer } from "styles/quienes-somos.styles";
import Coin from "assets/Coin.png";
import Franco from "assets/Quienes-somos/Franco.jpeg";
import Joan from "assets/Quienes-somos/Joan.jpeg";
import Lucio from "assets/Quienes-somos/Lucio.jpeg";
import { NODE_ENV } from "constants/index";

const members = [
  {
    name: "Joan Duarte",
    role: "Co-Founder",
    photo: NODE_ENV !== "development" ? `/${Joan}` : Joan,
  },
  {
    name: "Franco Quattroqui",
    role: "Co-Founder",
    photo: NODE_ENV !== "development" ? `/${Franco}` : Franco,
  },
  {
    name: "Ignacio Borzone",
    role: "Co-Founder",
  },
  {
    name: "Lucio Luchini",
    role: "Co-Founder",
    photo: NODE_ENV !== "development" ? `/${Lucio}` : Lucio,
  },
];

function QuienesSomos() {
  return (
    <QuienesSomosContainer>
      <div className="bg" />
      <div className="overlay" />
      <section>
        <h2>Conocé al equipo DL3ARN</h2>
        <ul className="members">
          {members.map((member) => (
            <Member>
              {member.photo ? (
                <img src={member.photo} alt={member.name} />
              ) : (
                <img src={Coin} alt="" />
              )}

              <div>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            </Member>
          ))}
        </ul>
      </section>
    </QuienesSomosContainer>
  );
}

export default QuienesSomos;
