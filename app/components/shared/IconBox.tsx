import { IconType } from "react-icons";

interface IconBoxProps {
  icon: IconType;
  title: string;
  description: string;
}

const IconBox = ({ icon: Icon, title, description }: IconBoxProps) => (
  <div className="w-full h-fit flex flex-col gap-3 bg-white p-6 rounded-xl shadow-md text-left items-left">
    <div className={`p-3 rounded-lg bg-brand w-fit`}>
      <Icon className="w-10 h-10 text-white" />
    </div>

    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default IconBox;
