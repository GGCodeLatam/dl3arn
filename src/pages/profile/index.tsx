import PrivateRoute from "components/PrivateRoute";
import { useAuth } from "context/firebase";
import Image from "next/image";
import { ProfileContainer } from "@/styles/profile.styles";
import { SecondaryButton } from "components/Buttons";
import Head from "next/head";
import { GetServerSideProps } from "next";
import privateRoute from "utils/privateRoute";
import FullContainer from "styles/FullContainer";
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
      <Head>
        <title>DL3arn | Profile</title>
      </Head>

      <FullContainer>
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
      </FullContainer>
    </PrivateRoute>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isUnauthenticated = await privateRoute(context);
  if (isUnauthenticated) return isUnauthenticated;
  return { props: {} };
};
export default Profile;
