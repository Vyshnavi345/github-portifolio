import Title from "./Title";
import { MdWork } from "react-icons/md";
import Image from "next/image";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";
import falkor8Logo from "./falkor.png"

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<Image src={falkor8Logo} alt="Falkor8 Logo" width={30} height={30} />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Falkor8"
          subTitle="Software Engineering Intern July 2024 - September 2024"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="UChicago TechTeam"
          subTitle="Project Member September 2023 - December 2023"
          icon={<SiToptal />}
        />
        
      </div>
    </div>
  );
};

export default Experience;
