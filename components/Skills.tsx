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
          link="https://drive.google.com/file/d/1mErhlQvjZVUdD5ca-LtMJyaTeF5T-kTu/view?usp=sharing"
        />
        <SkillsInput title="Reactjs" link="https://drive.google.com/file/d/1PCTH2i6tfzAMldVc178qHv55XRvotlJG/view?usp=sharing" />
        <SkillsInput title="Nodejs" link="https://drive.google.com/file/d/12WkN9BdAp6aYNqT_PBaeLuLj3KP0r4wU/view?usp=drive_link" />
        <SkillsInput title="MongoDB" link="https://drive.google.com/file/d/1mZ_f90xaK4nEoWiONzmzA4nOBq036E7b/view?usp=sharing" />
        
        
        <SkillsInput
          title="HTML5"
          link="https://drive.google.com/file/d/1pNQIsmaMGNURzxeVbehFfz9TsSsfzNrc/view?usp=sharing"
        />
        <SkillsInput
          title="CSS3"
          link="https://drive.google.com/file/d/1lZClZRQdhe28_VuebytQCwaVgc7dBRnW/view?usp=sharing"
        />
        
        <SkillsInput title="Github" link="https://github.com/KOYYADOONDYSAIVYSHNAVI" />
        <SkillsInput title="Python" link="https://www.linkedin.com/learning/certificates/22a9a9f0c3394469d65454d6802191624487eb33706216f2397483774e3a72a9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNPFnNkRHR4u6%2B%2Fa2u7slvw%3D%3D" />
        <SkillsInput title="SQL" link="https://www.hackerrank.com/certificates/bbc77732aeed" />
        <SkillsInput title="Docker" link="https://drive.google.com/file/d/1pWLtOGbLPo4w6A8G6oWFPTjYum5wCXhZ/view?usp=sharing" />
        <SkillsInput title="Flask" link="https://drive.google.com/file/d/1dhFmXxutVRaCeMZdyg50AZLtcZgRsRwc/view?usp=sharing" />
        <SkillsInput title="Figma" link="https://drive.google.com/file/d/104uNqt_9SF5QNs3228w94z1XL8h1zhiu/view?usp=sharing" />
        <SkillsInput title="AWS" link="https://www.credly.com/badges/3e1d7338-d635-4b71-8021-f042bd27ba37" />
        <SkillsInput title="TypeScript" link="https://drive.google.com/file/d/1tEfKpkqzN98jXOt_J_70SW7l4T2P99nz/view?usp=sharing" />
        <SkillsInput title="Kubernetes" link="https://drive.google.com/file/d/1I2KmOE9faZXWp3ZlosSVNjR2KlvQy3jV/view?usp=sharing" />
        <SkillsInput title="Java" link="https://drive.google.com/file/d/1lI-1_6HOm8R6-66d7h5z40EqNXjUKB4d/view?usp=sharing" />
        <SkillsInput title="Postgres" link="https://drive.google.com/file/d/1-wmYl3jL32PVWtBg6UARH16lvqwVZs6C/view?usp=sharing" />
        <SkillsInput title="Linux" link="https://drive.google.com/file/d/1P-b7JO8vQJQ8_Vo7eFA4jui-uoiKvgU2/view?usp=sharing" />
        <SkillsInput title="Next.js" link="https://drive.google.com/file/d/1m5pxyrbpHdkoGFgBfqkc1e8hdW6uydUP/view?usp=sharing" />
        <SkillsInput title="Express.js" link="https://drive.google.com/file/d/1GYRW3bAQxHFz4YkYXcmCrgWTVMZJ3Zqa/view?usp=sharing" />
      </div>
    </div>
  );
};

export default Skills;
