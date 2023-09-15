import Introduction from "../Atoms/Introduction";
import Spacing from "../Atoms/Spacing";
import TagList from "./TagList";

interface ProjectInfoProps {
  name: string;
  period: string;
  introduction: string;
  tags: string[];
}

const ProjectInfo = ({
  name,
  period,
  introduction,
  tags,
}: ProjectInfoProps) => {
  return (
    <>
      <h4 className="font-bold py-0">{name}</h4>
      <p className="text-sm font-normal">{period}</p>
      <p className="font-normal text-base leading-[22px]">{introduction}</p>
      <Spacing className="h-[6px]" />
      <TagList tags={tags} />
    </>
  );
};

export default ProjectInfo;
