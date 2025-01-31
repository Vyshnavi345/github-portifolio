import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput title="MongoDB" link="https://www.mongodb.com/" />
        
        
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
        
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Python" link="https://www.python.org/" />
        <SkillsInput title="SQL" link="https://www.mysql.com/" />
        <SkillsInput title="Go" link="https://go.dev/" />
        <SkillsInput title="Docker" link="https://www.docker.com/" />
        <SkillsInput title="Flask" link="https://flask.palletsprojects.com/en/stable/" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        
      
      </div>
    </div>
  );
};

export default Skills;
