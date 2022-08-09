import { Member, QuienesSomosContainer } from "styles/quienes-somos.styles";
import Coin from "assets/Coin.png";

const members = [
  { name: "Joan Mateo Duarte", role: "Co-Founder" },
  { name: "Franco Quattroqui", role: "Co-Founder" },
  { name: "Ignacio Borsone", role: "Co-Founder" },
  { name: "Lucio Luchini", role: "Co-Founder" },
];

function QuienesSomos() {
  return (
    <QuienesSomosContainer>
      <section>
        <h2>Conocé al equipo DLEARN</h2>
        <ul className="members">
          {members.map((member) => (
            <Member>
              <img src={Coin} alt="" />
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
