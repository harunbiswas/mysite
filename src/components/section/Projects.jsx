import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";
import Title from "../Title";
import TitleMain from "../TitleMain";

const Project = ({ data }) => {
  const { img, title, liveUrl, github } = data;
  return (
    <div className="portfolio">
      <Image src={img} alt={title} width={10000} height={10000} />
      <div className="links">
        {liveUrl && (
          <Link title="preview" target="_blank" href={liveUrl}>
            <AiOutlineEye />
          </Link>
        )}
        {github && (
          <Link title="github" target="_blank" href={github}>
            <AiFillGithub />
          </Link>
        )}
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default function Projects() {
  const [featured, setFeatured] = useState({
    img: "/images/portfolio1.jpg",
    title: "my Portfolio web site useing next.js",
    liveUrl: "",
    github: "https://github.com/harunbiswas/hbr.git",
  });

  const [portfolios, setPortfolios] = useState([
    {
      img: "/images/portfolio2.jpg",
      title: "my Portfolio web site useing next.js",
      liveUrl: "",
      github: "https://github.com/harunbiswas/hbr.git",
    },
    {
      img: "/images/portfolio4.jpg",
      title: "my Portfolio web site useing next.js",
      liveUrl: "",
      github: "https://github.com/harunbiswas/hbr.git",
    },
    {
      img: "/images/portfolio3.jpg",
      title: "my Portfolio web site useing next.js",
      liveUrl: "",
      github: "https://github.com/harunbiswas/hbr.git",
    },
    {
      img: "/images/portfolio5.jpg",
      title: "my Portfolio web site useing next.js",
      liveUrl: "/",
      github: "https://github.com/harunbiswas/hbr.git",
    },
  ]);

  return (
    <section className="portfolios" id="portfolios">
      <Title
        data={{ text: "Projects", icon: <MdOutlineAutoAwesomeMosaic /> }}
      />
      <TitleMain data={{ text1: "Featured", text2: "Projects" }} />
      <div className="portfolios-featured">
        <Project data={featured} />
      </div>
      <div
        className="portfolios-wrp"
        style={{ height: `${(portfolios.length / 2) * 350}px` }}
      >
        {portfolios.map((protfolio, i) => (
          <Project data={protfolio} key={i} />
        ))}
      </div>
    </section>
  );
}
