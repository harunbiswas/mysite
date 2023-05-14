import { useState } from "react";

export default function Verify() {
  const [otp, setOtp] = useState("");
  return (
    <div className="verify">
      <h1>harunbiswasrubel@gmail.com</h1>
      <input type="text" value={otp} />
      <button>Verify</button>
    </div>
  );
}
