import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Social() {
  const items = [
    {
      url: "https://www.facebook.com/harunbiswesrubel",
      icon: <FaFacebookF />,
    },
    {
      url: "https://twitter.com/rubel_harun",
      icon: <FaTwitter />,
    },
    {
      url: "https://www.linkedin.com/in/harun-biswas-rubel-03b18b203",
      icon: <FaLinkedin />,
    },
    {
      url: "https://github.com/harunbiswas",
      icon: <FaGithub />,
    },
  ];

  const Item = ({ data }) => {
    return (
      <li className="social-item">
        <Link target="_blank" href={data.url}>
          {data.icon}
        </Link>
      </li>
    );
  };

  return (
    <ul className="social">
      {items.map((item, i) => (
        <Item data={item} key={i} />
      ))}
    </ul>
  );
}
