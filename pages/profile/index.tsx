import PrivateRoute from "components/PrivateRoute";
import { useAuth } from "context/firebase";
import { ProfileContainer } from "styles/profile.styles";
import { SecondaryButton } from "components/Buttons";
import ProfileForm from "components/Forms/ProfileForm";

import { BiChevronRight, BiLogOut } from "react-icons/bi";
import Layout from "components/Layouts";
import Avatar from "components/Avatar";
import { useState } from "react";
import Head from "next/head";
import Information from "components/Profile/Information";

const sections = [
  { name: "Mi informacion", element: <Information /> },
  { name: "Cuenta", element: <ProfileForm /> },
];

function Profile() {
  const {
    data: { user, isLoading },
    userData,
    logout,
  } = useAuth();

  const [section, setSection] = useState<number>(0);
  const handleSection = (num: number) => setSection(num);

  return (
    <>
      <Head>
        <title key="title">Mi perfil | DL3ARN</title>
      </Head>
      <PrivateRoute>
        <Layout>
          <ProfileContainer>
            <div className="left">
              {sections.map((s, i) => (
                <button
                  className="btn"
                  key={s.name}
                  onClick={() => handleSection(i)}
                >
                  <BiChevronRight />
                  {s.name}
                </button>
              ))}

              <SecondaryButton style={{ textAlign: "left" }} onClick={logout}>
                <BiLogOut />
                Logout
              </SecondaryButton>
            </div>

            <div className="right">
              <Avatar
                isLoading={isLoading}
                role={userData?.role}
                img={user?.photoURL}
                to="right"
                name={user?.displayName || ""}
                email={user?.email || ""}
              />

              {sections[section].element}
            </div>
          </ProfileContainer>
        </Layout>
      </PrivateRoute>
    </>
  );
}

export default Profile;
