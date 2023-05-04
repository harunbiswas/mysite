import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { BiDollar, BiHome } from "react-icons/bi";
import { BsChatSquareDots, BsFillPersonFill } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  MdElectricalServices,
  MdOutlineAutoAwesomeMosaic,
} from "react-icons/md";
import ThemeContext from "../context/ThemeContext";

export const items = [
  {
    text: "Home",
    icon: <BiHome />,
    url: "#introduce",
  },

  {
    text: "About",
    icon: <BsFillPersonFill />,
    url: "#about",
  },
  {
    text: "resume",
    icon: <HiOutlineDocumentText />,
    url: "#resume",
  },
  {
    text: "services",
    icon: <MdElectricalServices />,
    url: "#services",
  },
  {
    text: "Skills",
    icon: <GiSkills />,
    url: "#skills",
  },
  {
    text: "Portfolios",
    icon: <MdOutlineAutoAwesomeMosaic />,
    url: "#portfolios",
  },
  {
    text: "Offers",
    icon: <BiDollar />,
    url: "#pricing",
  },
  {
    text: "Blogs",
    icon: <FaBlog />,
    url: "#blogs",
  },
  {
    text: "Live Chat",
    icon: <BsChatSquareDots />,
    url: "/",
  },
];
export default function NavMenu() {
  const [isToggle, setIsToggle] = useState(false);
  const ref = useRef();

  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };

  const { secId } = useContext(ThemeContext);

  useEffect(() => {
    if (isToggle) {
      document.addEventListener("click", (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setIsToggle(false);
        }
      });
    }
  });

  const handler = () => {
    setIsToggle(false);
  };

  return (
    <nav ref={ref} className="nav-menu">
      <button onClick={toggleHandler} className="toggle-btn">
        <span></span>
        <span></span>
      </button>

      <ul className={`main-menu ${(isToggle && "show") || ""}`}>
        <strong>Menu</strong>

        {items.map((item, i) => (
          <li key={i} className="main-menu-item">
            <Link
              className={
                (secId === item.url.replace("#", "") && "active") || ""
              }
              onClick={handler}
              href={item.url}
            >
              {item.icon}
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
