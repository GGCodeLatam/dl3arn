import styled from "styled-components";

import Card from "components/Dashboard/Card";
import CardPlaceholder from "components/Placeholders/Card";
import PrivateRoute from "components/PrivateRoute";
import useCourses from "hooks/useCourses";
import ExtLink from "components/ExtLink";
import { TbBrandWhatsapp } from "react-icons/tb";

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  section {
    min-height: calc(95vh - var(--nav-size));
    h2 {
      font-size: 1.25rem;
      padding: 1rem 0;
    }

    .cards {
      display: grid;
      margin: 0 0 2rem 0;

      grid-template-columns: repeat(2, 1fr);
      gap: 2rem 3rem;
      @media screen and (min-width: 820px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
      }

      .add-course {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 2rem;
        background-color: #25d36625;
        border: 4px dashed #25d366a0;
        border-radius: 7px;

        color: #888;
        font-weight: 700;

        .icon {
          color: #25d366;
        }

        p {
          text-align: center;
          font-size: 1.15rem;
        }
      }
    }
  }
`;

function Dashboard() {
  const {
    data: { courses, isLoading },
  } = useCourses();

  return (
    <PrivateRoute verified>
      <Container>
        <main>
          <section>
            <h2>courses</h2>
            <div className="cards">
              {Array.from({ length: 6 }).map((_, i) =>
                isLoading ? (
                  <CardPlaceholder key={i} />
                ) : (
                  courses[i] && (
                    <Card
                      key={i}
                      id={courses[i].id}
                      name={courses[i].name}
                      total_duration={courses[i].total_duration}
                      score={courses[i].score}
                      instructor={courses[i].instructor}
                      image={courses[i].image}
                      description={i === 0 ? courses[i].description : ""}
                    />
                  )
                )
              )}
              <ExtLink
                href="https://wa.me/+5493415059981"
                className="add-course"
              >
                <p>Si queres lanzar tu curso en la web 3.0, habla aca</p>
                <span>
                  <TbBrandWhatsapp size={30} className="icon" />
                </span>
              </ExtLink>
            </div>
          </section>
        </main>
      </Container>
    </PrivateRoute>
  );
}

export default Dashboard;
