import { useState } from "react";
import { FaBlog } from "react-icons/fa";
import BlogCard from "../BlogCard";
import Title from "../Title";
import TitleMain from "../TitleMain";

export default function Blogs() {
  const [blogs, setBlogs] = useState([
    {
      img: "https://media.istockphoto.com/id/1081869316/photo/we-need-to-fix-this-big-before-we-continue.jpg?s=612x612&w=0&k=20&c=U1MsLtKSFp56JC-_1wtLQcbXY2bgd87fEDhHPvA-_Xo=",
      title: "blog title",
      link: "https://github.com/harunbiswas",
    },
    {
      img: "https://media.istockphoto.com/id/527344789/photo/technology-innovations.jpg?s=612x612&w=0&k=20&c=oqhTmBFpQZtIH-5hI9aWy8wBaOemrHKJmOY_Vrg-la8=",
      title: "blog title",
      link: "https://github.com/harunbiswas",
    },
    {
      img: "https://media.istockphoto.com/id/957159284/photo/man-working-with-modern-interface.jpg?s=612x612&w=0&k=20&c=8WcxeBZ8yclWIOzv4hvv0YsLExsag47fFruJTkMlMqM=",
      title: "blog title",
      link: "https://github.com/harunbiswas",
    },
    {
      img: "https://media.istockphoto.com/id/466705350/photo/planning-your-travels-have-never-been-easier.jpg?s=612x612&w=0&k=20&c=Yg6-hJDyoKMioMd1d850ZzAISArtPsc-a7mbeHCk_gw=",
      title: "blog title",
      link: "https://github.com/harunbiswas",
    },
    {
      img: "https://media.istockphoto.com/id/888917782/photo/the-information-is-there-just-reach-out-and-grab-it.jpg?s=612x612&w=0&k=20&c=sirY5WIqeP_pGBfkQhAwYuHFYYtndEw5hbS1j2VAApk=",
      title:
        "Take a minute to Create an Account and easily customize your preferences and manage your results history.",
      link: "https://github.com/harunbiswas",
    },
  ]);

  return (
    <section className="blogs" id="blogs">
      <Title data={{ text: "BLogs", icon: <FaBlog /> }} />
      <TitleMain data={{ text1: "Tech", text2: "News" }} />
      <div className="blogs-wrp">
        {blogs.map((blog, i) => (
          <BlogCard data={blog} key={i} />
        ))}
      </div>
    </section>
  );
}
