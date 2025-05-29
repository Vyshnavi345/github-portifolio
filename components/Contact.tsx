import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Get in touch!</h2>
        <a href="https://drive.google.com/file/d/1KD7cMWIAx6DsglRir0MAsVhNvo3-TCjx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Resume
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/KOYYADOONDYSAIVYSHNAVI" />
        <SocialLink
          title="Linkedin"
          link="http://www.linkedin.com/in/doondy-sai-vyshnavi-koyya-137ab8215"
        />
        <SocialLink title="Email" link="mailto:vyshnavikds@gmail.com" />
      </div>
    </div>
  );
};

export default Contact;
