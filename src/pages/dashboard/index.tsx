import styled from "styled-components";

import Card from "@/components/Dashboard/Card";
import CardPlaceholder from "@/components/Placeholders/Card";
import PrivateRoute from "@/components/PrivateRoute";
import useCourses from "@/hooks/useCourses";
import Head from "next/head";
import { GetServerSideProps } from "next";
import privateRoute from "utils/privateRoute";

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
    }
  }
`;

function Dashboard() {
  const {
    data: { courses, isLoading },
  } = useCourses();

  return (
    <PrivateRoute verified>
      <Head>
        <title>DL3arn | Dashboard</title>
      </Head>
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
            </div>
          </section>
        </main>
      </Container>
    </PrivateRoute>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isUnauthenticated = await privateRoute(context);
  if (isUnauthenticated) return isUnauthenticated;
  return { props: {} };
};
export default Dashboard;
