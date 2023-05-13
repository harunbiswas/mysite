import { GiSkills } from "react-icons/gi";
import Title from "../Title";
import TitleMain from "../TitleMain";

export default function Skills() {
  const skills = [
    {
      name: "React.js",

      prograss: 80,
    },
    {
      name: "Next.js",

      prograss: 75,
    },
    {
      name: "node.js",

      prograss: 80,
    },
    {
      name: "express.js",

      prograss: 70,
    },
    {
      name: "MongoDB",

      prograss: 65,
    },
    {
      name: "MySql",

      prograss: 60,
    },
  ];

  return (
    <section className="skills" id="skills">
      <Title data={{ text: "Skills", icon: <GiSkills /> }} />
      <TitleMain data={{ text1: "My", text2: "Advantages" }} />

      <div className="skills-wrp">
        {skills.map((skill, i) => (
          <div className="skill" key={i}>
            <h2 className="name">{skill.name}</h2>
            <strong>{skill.prograss}%</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
