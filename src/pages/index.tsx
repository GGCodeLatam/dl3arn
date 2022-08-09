import { Link } from "react-router-dom";
import { HomeContainer } from "styles/home.styles";

function Home() {
  return (
    <HomeContainer>
      <main>
        <section className="content">
          <div className="bg" />
          <div className="overlay" />
          <div className="main-content">
            <h2 className="header">
              Bienvenidos a la primer plataforma de cursos online con tecnología
              blockchain
            </h2>

            <div className="buttons">
              <Link to="roadmap" className="link roadmap">
                roadmap
              </Link>
              <Link to="quienes-somos" className="link quienes-somos">
                quienes somos
              </Link>
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
      </main>
    </HomeContainer>
  );
}

export default Home;
