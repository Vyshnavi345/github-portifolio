import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicPortfolio from "../public/img/projects/dynamicPortfolio.png";
import reactBD from "../public/img/projects/reactBD.png";
import dashboard from "../public/img/projects/dashboard.webp";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import reservation from "./auction4.png";
import auction from "./auction6.png";
import gas from "./gas.png";
import chat from "./chat.png"

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={gas.src}
          title="Genomics Annotation Service (GAS) using AWS"
          link="https://amazonclone.reactbd.com/"
        />
        <ProjectCard
          img={auction.src}
          title="Auction Site"
          link="https://github.com/KOYYADOONDYSAIVYSHNAVI/bidmarket/tree/main"
        />
        <ProjectCard
          img={reservation.src}
          title="Reservation System using FastAPI"
          link="https://github.com/KOYYADOONDYSAIVYSHNAVI/reserve-equipments"
        />
        <ProjectCard
          img={noorShop.src}
          title="Smart Waste Management System with IoT and Blockchain Integration"
          link="https://orebishopping.reactbd.com/"
        />
        <ProjectCard
          img={dynamicPortfolio.src}
          title="Healthbeats"
          link="https://amazonclone.reactbd.com/"
        />

        <ProjectCard
          img={chat.src}
          title="Chat App with AWS amplify"
          link="https://github.com/Vyshnavi345/chatapp"
        />
      </div>
    </div>
  );
};

export default Projects;
