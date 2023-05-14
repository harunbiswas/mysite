import { url } from "@/values";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (email) {
      axios
        .post(`${url}/price`, { email })
        .then((d) => {
          console.log(d.data);
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    }
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
