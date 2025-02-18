import { ReactNode } from "react";

interface Props {
  title: string;
  subTitle: string;
  icon: ReactNode;
  description: string[];  // Add description as an array of strings
}

const ExperienceCard = ({ title, subTitle, icon, description }: Props) => {
  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg shadow-md">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base tracking-wide text-gray-400">{subTitle}</p>
        {/* Render description as bullet points */}
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
