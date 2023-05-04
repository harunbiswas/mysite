import { BiDesktop } from "react-icons/bi";
import { BsLaptop, BsWindowDesktop } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import Title from "../Title";
import TitleMain from "../TitleMain";

export default function Services() {
  const services = [
    {
      title: "Front-end web development",
      text: "I created User Interface for web site useing react.js & next.js",
      projects: 12,
      icon: <BsLaptop />,
    },
    {
      title: "Backend web development",
      text: "I created API and rest Api for web site useing node.js and express.js",
      projects: 7,
      icon: <BiDesktop />,
    },
    {
      title: "MERN web development",
      text: "I developed web site useing MongoDB, express.js, react.js & node.js",
      projects: 9,
      icon: <BsWindowDesktop />,
    },
  ];

  const Service = ({ service }) => {
    return (
      <div className="service">
        <h3>{service.title}</h3>
        <p>{service.text}</p>
        <button className="">{service.projects} projects</button>
        <div className="icon">{service.icon}</div>
      </div>
    );
  };
  return (
    <section className="services" id="services">
      <Title data={{ text: "Services", icon: <MdElectricalServices /> }} />
      <TitleMain data={{ text1: "My", text2: "Specializations" }} />
      <div className="services-wrp">
        {services.map((service, i) => (
          <Service service={service} key={i} />
        ))}
      </div>
    </section>
  );
}
