import { BiHome } from "react-icons/bi";

import Counter from "../Counter";
import RotedBtn from "../RotedBtn";
import Title from "../Title";

export default function Instraction() {
  return (
    <section className="introduce" id="introduce">
      <Title data={{ text: "INTRODUCE", icon: <BiHome /> }} />

      <h1>
        Say hi form <span>HBR.</span>,
      </h1>
      <h1>MERN stack web developer</h1>
      <p className="text">
        I design and develop, code beautifully simple things and i love what i
        do. <br /> Just simple like that!
      </p>

      <RotedBtn />
      <Counter />
    </section>
  );
}
