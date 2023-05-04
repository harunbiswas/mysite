import { useState } from "react";
import { BiDollar } from "react-icons/bi";
import Title from "../Title";
import TitleMain from "../TitleMain";

export default function Pricing({ data }) {
  const [pricData, setPriceData] = useState([
    {
      name: "Basic",
      text: "Fronted web development project or components.",
      price: "15",
      features: [
        "Need your wireframe",
        "Design with Figma, Framer",
        "Implement with Webflow, React.js, next.js",
        "Remote/Online",
        "Work in business days, no weekend.",
        "Support 6 months",
      ],
    },
    {
      name: "Premium",
      text: "Full-stack web  development  project or API.",
      price: "25",
      features: [
        "Don't need wireframe or anything",
        "Design with Figma, Framer",
        "Implement with Webflow, React, next.js, express.js, node.js",
        "Remote/Online",
        "Work with both weekend",
        "Support 12 months",
        "Your project alway be priority",
        "Customer care gifts",
      ],
    },
  ]);

  const PricingCard = ({ data }) => {
    const { name, text, price, features } = data;
    return (
      <div className="pricing-card">
        <div className="pricing-card-header">
          <div className="top">
            <strong>{name}</strong>
            <span>{text}</span>
          </div>
          <div className="bottom">
            <span>
              {" "}
              <strong>${price}</strong> /houres
            </span>
          </div>
        </div>
        <ul className="pricing-card-body">
          {features.map((d) => (
            <li key={d}>
              <span>{d}</span>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary">Pick of offer</button>
      </div>
    );
  };
  return (
    <section className="pircing" id="pricing">
      <Title data={{ text: "Offers", icon: <BiDollar /> }} />
      <TitleMain data={{ text1: "My", text2: "Offers" }} />
      <div className="pricing-wrp">
        {pricData.map((d) => (
          <PricingCard data={d} key={d.name} />
        ))}
      </div>
    </section>
  );
}
