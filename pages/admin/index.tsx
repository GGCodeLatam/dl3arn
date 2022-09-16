import Users from "components/Admin/Users";
import { useAuth } from "context/firebase";
import Head from "next/head";
import Image from "next/image";
import { AdminContainer } from "styles/admin.styles";

import Icon from "assets/Icon.png";
import Link from "next/link";

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
          <aside className="options">
            <Link href="/">
              <a>
                <div className="icon-container">
                  <Image className="icon" layout="fill" src={Icon} alt="" />
                </div>
              </a>
            </Link>
          </aside>
          <div className="content">
            <h1>Admin dashboard</h1>
            <div>
              <Users />
            </div>
          </div>
        </AdminContainer>
      )}
    </>
  );
}

export default Admin;
