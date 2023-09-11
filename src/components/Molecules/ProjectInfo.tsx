import Introduction from "../Atoms/Introduction";
import Spacing from "../Atoms/Spacing";
import TagList from "./TagList";

interface ProjectInfoProps {
  name: string;
  introduction: string;
  tags: string[];
}

const ProjectInfo = ({ name, introduction, tags }: ProjectInfoProps) => {
  return (
    <>
      <h4 className="font-bold">{name}</h4>
      <p className="font-light">{introduction}</p>
      <Spacing className="h-[6px]" />
      <TagList tags={tags} />
    </>
  );
};

export default ProjectInfo;
