import { useMdToHtml } from "@/hooks/useMdToHTML";
import { useContext } from "react";
import { Project } from "../../../types";
import { ProjectModalContext } from "@/provider/ProjectModalProvider";

import CloseButton from "../Atoms/CloseButton";
import TagList from "./TagList";
import Section from "../Atoms/Section";
import Title from "../Atoms/Title";
import ImageFrame from "../Atoms/ImageFrame";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import IconicAnchor from "./IconicAnchor";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const { handleModalClose } = useContext(ProjectModalContext);
  const htmlContent = useMdToHtml("introduction");

  return (
    <div className="py-10 flex flex-col gap-y-4">
      <HoverControlWrapper className="flex justify-end">
        <CloseButton onClick={handleModalClose} />
      </HoverControlWrapper>
      <div className="flex flex-col gap-y-8">
        <Title>{project.name}</Title>

        <ImageFrame
          imageUrl={project.thumbnail}
          imageAlt={project.name}
          aspectRatio={0.6}
        />

        <Section title="About">
          <div
            className="w-full"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </Section>

        <Section title="Technologies">
          <TagList tags={project.tags} />
        </Section>

        <Section title="Links">
          <IconicAnchor href={project.website} icon={AiOutlineLink}>
            {project.website}
          </IconicAnchor>
          <IconicAnchor href={project.website} icon={AiFillGithub}>
            {project.github}
          </IconicAnchor>
        </Section>
      </div>
    </div>
  );
};

export default ProjectDetail;
