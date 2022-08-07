import PrivateRoute from "components/PrivateRoute";
import { useAuth } from "context/firebase";
import { ProfileContainer } from "styles/profile.styles";
import { SecondaryButton } from "components/Buttons";
import ProfileForm from "components/Forms/ProfileForm";

import { BiLogOut } from "react-icons/bi";

function Profile() {
  const {
    data: { user },
    logout,
  } = useAuth();

  if (!user) return null;
  const { email, photoURL, displayName } = user;

  return (
    <PrivateRoute>
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
                <img src={photoURL} alt="" />
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
    </PrivateRoute>
  );
}

export default Profile;
