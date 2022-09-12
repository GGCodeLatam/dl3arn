import { useAuth } from "context/firebase";
import Head from "next/head";
import { AdminContainer } from "styles/admin.styles";

function Admin() {
  const {
    userData,
    data: { isLoading },
  } = useAuth();

  return (
    <>
      <Head>
        <title key="title">Admin dashboard | DL3ARN</title>
      </Head>
      {!isLoading && userData?.role && (
        <AdminContainer>
          <aside className="options">hola</aside>
          <div className="content">
            <h1>Admin dashboard</h1>
            <div></div>
          </div>
        </AdminContainer>
      )}
    </>
  );
}

export default Admin;

function adminPetitions() {}
