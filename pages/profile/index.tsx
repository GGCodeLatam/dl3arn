import PrivateRoute from "components/PrivateRoute";
import { useAuth } from "context/firebase";
import { ProfileContainer } from "styles/profile.styles";
import { SecondaryButton } from "components/Buttons";
import ProfileForm from "components/Forms/ProfileForm";

import { BiLogOut } from "react-icons/bi";
import { User } from "firebase/auth";
import Image from "next/image";
import Layout from "components/Layouts";
import Avatar from "components/Avatar";

function Profile() {
  const {
    data: { user, isLoading },
    userData,
    logout,
  } = useAuth();

  const { email, photoURL, displayName } = user || ({} as User);

  return (
    <PrivateRoute>
      <Layout>
        <ProfileContainer>
          <div className="left">
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

            <ProfileForm />
          </div>
        </ProfileContainer>
      </Layout>
    </PrivateRoute>
  );
}

export default Profile;
