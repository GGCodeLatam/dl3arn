import PrivateRoute from "components/PrivateRoute";
import { useAuth } from "context/firebase";
import { ProfileContainer } from "styles/profile.styles";
import { SecondaryButton } from "components/Buttons";
import ProfileForm from "components/Forms/ProfileForm";

import { BiLogOut } from "react-icons/bi";
import { User } from "firebase/auth";
import Image from "next/image";
import Layout from "components/Layouts";

function Profile() {
  const {
    data: { user },
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
            <div className="info">
              {photoURL && (
                <div className="img-container">
                  <Image layout="fill" src={photoURL} alt="" />
                </div>
              )}

              <div className="names">
                {displayName && <h2 className="name">{displayName}</h2>}
                <p className="email">{email}</p>
              </div>
            </div>

            <ProfileForm />
          </div>
        </ProfileContainer>
      </Layout>
    </PrivateRoute>
  );
}

export default Profile;
