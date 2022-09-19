import Image from "next/image";
import { useEffect, useState } from "react";
import getUsers from "services/firebase/store/getUsers";
import { UserModel } from "utils/types/firebase";

function Users() {
  const [users, setUsers] = useState<UserModel[] | null>(null);
  useEffect(() => {
    const p = async () => {
      const users = await getUsers();
      console.log(users);
      setUsers(users);
    };
    p();
  }, []);

  return (
    <div className="users">
      {users?.map((user) => (
        <li key={user.email}>
          <span className={`role ${user.role}`} />
          {user.avatar ? (
            <div className="avatar">
              <Image
                layout="fill"
                className="img"
                src={user.avatar}
                alt={user.email}
              />
            </div>
          ) : (
            <span className="no-image" />
          )}
          <p className="email">{user.email}</p>
        </li>
      ))}
    </div>
  );
}

export default Users;
