import ThemeContext from "@/components/context/ThemeContext";
import Blogs from "@/components/section/Blogs";
import Instraction from "@/components/section/Instraction";
import Pricing from "@/components/section/Pricing";
import Projects from "@/components/section/Projects";
import Resume from "@/components/section/Resume";
import Services from "@/components/section/Services";
import Skills from "@/components/section/Skills";
import { useContext } from "react";
import { InView } from "react-intersection-observer";
import About from "../components/section/About";

export default function Home() {
  const { secIdhandler } = useContext(ThemeContext);

  const handleChange = (inView, entry) => {
    if (inView) {
      secIdhandler(entry.target.childNodes[0].id);
    }
  };

  return (
    <>
      <main className="home">
        <InView as="div" onChange={handleChange}>
          <Instraction />
        </InView>
        <InView as="div" onChange={handleChange}>
          <About />
        </InView>

        <InView as="div" onChange={handleChange}>
          <Resume />
        </InView>

        <InView as="div" onChange={handleChange}>
          <Services />
        </InView>

        <InView as="div" onChange={handleChange}>
          <Skills />
        </InView>

        <InView as="div" onChange={handleChange}>
          <Projects />
        </InView>

        <InView as="div" onChange={handleChange}>
          <Pricing />
        </InView>

        <InView as="div" onChange={handleChange}>
          <Blogs />
        </InView>
      </main>
    </>
  );
}
