import { sendPasswordResetEmail } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "services/firebase";
import { InputChange } from "utils/types";

const style = { display: "grid", placeItems: "center" };
function ChangePassword() {
  const [email, setEmail] = useState("");

  const reset = (e: FormEvent) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("email sent");
      })
      .catch((err: any) => {
        const { code, message } = err;
        console.log(code, message);
      });
  };

  const handleEmail = ({ target: { name, value } }: InputChange) => {
    setEmail(value);
  };

  return (
    <div style={style}>
      <form onSubmit={reset}>
        <input
          onChange={handleEmail}
          value={email}
          type="text"
          placeholder="email"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ChangePassword;
