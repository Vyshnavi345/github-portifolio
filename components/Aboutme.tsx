import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        I am a Master’s student in Computer Science at the University of Chicago with a passion for 
        solving complex problems through data-driven solutions and software development. 
        My expertise spans full-stack development, machine learning, and cloud-based applications, 
        with experience in integrating backend services with interactive frontends.
        </p>
        <p>
        I have worked on diverse projects, from ESG analytics and reservation systems to scalable genomics services, 
        applying my skills in Python, SQL and JavaScript. Proficient in tools like Docker, Git, 
        and gRPC, I have built robust applications using frameworks such as React, Node.js, and Flask. 
        I thrive in collaborative environments, contributing to cross-functional teams and leveraging technology to 
        drive innovation.
        </p>
        <p>
        Beyond academics, I am actively involved in the UChicago Tech Team, where I engage 
        in technical projects and problem-solving challenges. I am looking forward to applying my technical 
        expertise to build scalable, efficient, and user-centric solutions in real-world applications.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
