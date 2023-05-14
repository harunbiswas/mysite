import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="email"
          value={email}
          onChange={(e) => emailHandler(e)}
          placeholder="example@ex.com"
        />
        <button className="btn btn-primary">submit</button>
      </form>
    </div>
  );
}
