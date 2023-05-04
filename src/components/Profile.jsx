import Image from "next/image";
import Link from "next/link";
import { BsChatSquareDotsFill } from "react-icons/bs";
import Social from "./Social";

export default function Profile() {
  return (
    <div className="profile">
      <div className="brand">
        <h1>HBR.</h1>
        <p>MERN stack developer</p>
      </div>
      <div className="image">
        <Image
          src="/images/harun-biswas-rubel.jpg"
          width={100}
          height={100}
          alt="Harun Biswas Rubel"
        />
      </div>
      <div className="contact-info">
        <a href="tell:+8801770201232">+8801770201232</a>
        <p>Base in Barisal, Bangladesh</p>
      </div>
      <div className="copy-right">
        <p>&copy; {new Date().getFullYear()} Harun Biswas Rubel</p>
      </div>
      <Social />
      <Link className="btn btn-primary" href="/">
        <BsChatSquareDotsFill />
        Live chat with me!
      </Link>
    </div>
  );
}
