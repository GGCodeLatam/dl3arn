import Avatar from "components/Avatar";
import Image from "next/image";
import { useEffect, useState } from "react";
import getUsers from "services/firebase/store/getUsers";
import { UserModel } from "utils/types/firebase";

function Users() {
  const [users, setUsers] = useState<UserModel[] | null>(null);
  useEffect(() => {
    const p = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    p();
  }, []);

  return (
    <div className="users">
      {users?.map((user) => (
        <Avatar
          key={user.email}
          to="right"
          img={user.avatar}
          email={user.email}
          name={user.name}
          role={user.role}
        />
      ))}
    </div>
  );
}

export default Users;
