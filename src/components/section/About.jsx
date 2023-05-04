import Title from "../Title";
import {BiUser} from 'react-icons/bi'
import TitleMain from "../TitleMain";

export default function About(){
    const data = {
        text1: "Every great design begin with an even ",
        text2: "better story"
    }
    return(
        <section id="about" className="about">
            <Title data={{icon: <BiUser />, text: "about"}} />
           <TitleMain data={data} />
           <p>
           I am a highly proficient web developer with expertise in HTML, CSS, Sass, Bootstrap, Tailwind CSS, React.js, Next.js, Node.js, Express.js, and MongoDB. With my experience in developing web applications, I have developed a strong understanding of responsive design, user experience, and web development best practices.

I have worked on various web development projects ranging from small websites to large-scale web applications. I am skilled in developing both front-end and back-end web solutions, and have extensive experience with popular front-end frameworks such as React.js and Next.js.

My expertise in Node.js and Express.js allows me to create scalable back-end solutions, and I am proficient in using MongoDB as a database. I am also knowledgeable in cloud computing platforms such as AWS, which allows me to deploy and manage web applications on the cloud.
           </p>
        </section>
    )
}