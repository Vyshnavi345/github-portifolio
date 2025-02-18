import { ReactNode } from "react";

interface Props {
  title: string;
  subTitle: string;
  icon: ReactNode;
  projectDescriptions: { projectTitle: string, subTitle: string, description: string[] }[];
}

const ExperienceCard = ({ title, subTitle, icon, projectDescriptions }: Props) => {
  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg shadow-md">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base tracking-wide text-gray-400">{subTitle}</p>
        
        {/* Loop through projects and their descriptions */}
        {projectDescriptions.map((project, index) => (
          <div key={index} className="mt-4">
            <h4 className="text-xl font-semibold">{project.projectTitle}</h4>
            <p className="text-sm text-gray-400">{project.subTitle}</p>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              {project.description.map((point, i) => (
                <li key={i} className="text-white">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
