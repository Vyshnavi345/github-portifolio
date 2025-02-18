import Title from "./Title";
import { MdWork } from "react-icons/md";
import Image from "next/image";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";
import falkor8Logo from "./falkor.png";
import techlogo from "./tech.png";
import nlogo from "./logo.png"

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />}  />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <ExperienceCard
  title="Falkor8"
  subTitle="Software Engineering Intern | June 2024 - September 2024"
  icon={<Image src={falkor8Logo} alt="Falkor8 Logo" width={30} height={30} />}
  description={[
    "Developed and integrated a React.js frontend with a Flask backend for a web application.",
    "Built and implemented a machine learning model for spider charts.",
    "Designed interactive features for KPI visualization and user engagement."
  ]}
/>

<ExperienceCard
  title="UChicago TechTeam"
  subTitle="Project Member | September 2023 - December 2023"
  icon={<Image src={techlogo} alt="UChicago TechTeam Logo" width={30} height={30} />}
  projectDescriptions={[
    {
      projectTitle: "Mapping Tool for Partner Recruitment & Alumni Relocation",
      subTitle: "Project Member | September 2023 - December 2023",
      description: [
        "Collaborated on a mapping tool for partner recruitment and alumni relocation.",
        "Created Python unit tests and refactored backend code for improved performance.",
        "Worked on integrating data processing algorithms to enhance tool efficiency."
      ]
    },
    {
      projectTitle: "Genesys Works Project",
      subTitle: "Project Member | June 2024 - September 2024",
      description: [
        "Contributed to the Genesys Works project by enhancing data management and analysis.",
        "Played a key role in building an AWS Cloud database for managing student data.",
        "Led data cleaning and transformation efforts to ensure data accuracy.",
        "Created data visualizations using PowerBI and Python to support decision-making.",
        "Successfully migrated data from Excel to AWS Cloud for improved accessibility."
      ]
    }
  ]}
/>


<ExperienceCard
  title="N.Plus Innovations Pvt Ltd."
  subTitle="Junior Developer Intern | December 2022 - August 2023"
  icon={<Image src={nlogo} alt="N.Plus Logo" width={30} height={30} />}
  description={[
    "Worked with cloud technologies and web development tools to build scalable, cloud-based applications.",
    "Developed and deployed full-stack applications using React.js and Express.js.",
    "Implemented authentication and RESTful APIs for better user interactions."
  ]}
/>

        
      </div>
    </div>
  );
};

export default Experience;
