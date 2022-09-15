import { useEffect } from "react";
import getUsers from "services/firebase/store/getUsers";

function Users() {
  useEffect(() => {
    const p = async () => {
      const users = getUsers();
      console.log(users);
    };
    p();
  }, []);
  return <div></div>;
}

export default Users;
