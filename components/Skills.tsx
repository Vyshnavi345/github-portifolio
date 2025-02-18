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
        
        <SkillsInput title="Github" link="https://github.com/KOYYADOONDYSAIVYSHNAVI" />
        <SkillsInput title="Python" link="https://www.linkedin.com/learning/certificates/22a9a9f0c3394469d65454d6802191624487eb33706216f2397483774e3a72a9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNPFnNkRHR4u6%2B%2Fa2u7slvw%3D%3D" />
        <SkillsInput title="SQL" link="https://www.hackerrank.com/certificates/bbc77732aeed" />
        <SkillsInput title="Docker" link="https://www.docker.com/" />
        <SkillsInput title="Flask" link="https://flask.palletsprojects.com/en/stable/" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="AWS" link="https://www.credly.com/badges/3e1d7338-d635-4b71-8021-f042bd27ba37" />
        <SkillsInput title="TypeScript" link="https://www.typescriptlang.org/" />
        <SkillsInput title="Kubernetes" link="https://kubernetes.io/" />
        <SkillsInput title="Java" link="https://www.java.com/en/" />
        <SkillsInput title="Postgres" link="https://www.postgresql.org/" />
        <SkillsInput title="Linux" link="https://www.linux.org/" />
        <SkillsInput title="Next.js" link="https://nextjs.org/" />
        <SkillsInput title="Express.js" link="https://expressjs.com/" />
      </div>
    </div>
  );
};

export default Skills;
