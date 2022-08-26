import Link from "next/link";
import { HomeContainer } from "styles/home.styles";

function Landing() {
  return (
    <HomeContainer>
      <section className="content">
        <div className="bg" />
        <div className="overlay" />
        <div className="main-content">
          <div>
            <h2 className="header">
              Bienvenidos a la primer plataforma de cursos online con tecnología
              blockchain!
            </h2>

            <div className="buttons">
              <Link href="/auth/login">
                <a className="link login">login</a>
              </Link>
              <Link href="/quienes-somos">
                <a className="link login">quienes somos</a>
              </Link>
            </div>
          </div>

          <div className="presentation">
            <iframe
              width="768"
              height="432"
              src="https://www.youtube.com/embed/5d4T3p8J7dI"
              title="DLearn"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </HomeContainer>
  );
}

export default Landing;