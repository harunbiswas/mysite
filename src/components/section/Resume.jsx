import Title from "../Title";
import {RxResume} from 'react-icons/rx'
import TitleMain from "../TitleMain";

export default function Resume(){

    const resumeData = [
        {
            duration: '2020 - present',
            name: "MERN stack web developer",
            company: 'Fiverr & Upwork'
        },{
            duration: '2018-2020',
            name: "MERN stack web learner",
            company: 'Udamy & local company'
        },{
            duration: '2017 - 2021',
            name: "Diploma in Computer Science and Engineering ",
            company: 'Barisal Polytechnic Institute'
        },
    ]

const ResumeItem = ({data})=> {
    const {duration, name, company} = data
    return(
<div className="resume-item">
        <p className="duration">{duration}</p>
        <h2>{name}</h2>
        <p>{company}</p>
</div>
    )
}

    return(
        <section id="resume" className="resume">
            <Title data={{text:"resume", icon: <RxResume />}} />
            <TitleMain data={{text1: "Education &", text2: "Experience"}} />
            <div className="resume-wrp">
               {
                resumeData.map((d, i)=>(
                    <ResumeItem key={i} data={d} />
                ))
               }
            </div>
        </section>
    )
}