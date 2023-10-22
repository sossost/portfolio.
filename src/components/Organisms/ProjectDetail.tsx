import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { Project } from "@/types";

import CloseButton from "../Atoms/CloseButton";
import TagList from "../Molecules/TagList";
import Section from "../Atoms/Section";
import Title from "../Atoms/Title";
import ImageFrame from "../Atoms/ImageFrame";
import IconicAnchor from "../Molecules/IconicAnchor";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";
import MarkdownRenderer from "../Atoms/MarkdownRenderer";

interface ProjectDetailProps {
  handleModalClose: () => void;
  project: Project | null;
  mdContent?: string | null;
}

const ProjectDetail = ({
  handleModalClose,
  project,
  mdContent,
}: ProjectDetailProps) => {
  if (!project) return null;

  return (
    <div className="py-10 flex flex-col gap-y-4">
      <div className="fixed right-5 top-12 z-10 bg-dark/80 rounded-full backdrop-blur-lg md:static md:flex md:justify-end md:right-0">
        <HoverControlWrapper>
          <CloseButton onClick={handleModalClose} />
        </HoverControlWrapper>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col md:flex-row gap-x-4 justify-between md:items-end ">
          <Title>{project.name}.</Title>
          <h4>{project.period}</h4>
        </div>

        <ImageFrame
          imageUrl={project.image || project.thumbnail}
          imageAlt={project.name}
          aspectRatio={0.6}
        />

        <Section title="About.">{project.description}</Section>

        <Section title="Technologies.">
          <TagList tags={project.tags} />
        </Section>

        <Section title="Links.">
          {project.website && (
            <div className="flex flex-column md:flex-row gap-4">
              <IconicAnchor href={project.website} icon={AiOutlineLink}>
                {project.website}
              </IconicAnchor>
              {project.testId && <p>테스트 계정 : {project.testId}</p>}
            </div>
          )}

          <IconicAnchor href={project.github} icon={AiFillGithub}>
            {project.github}
          </IconicAnchor>
        </Section>

        {mdContent && (
          <Section title="Detail.">
            <MarkdownRenderer markdownContent={mdContent} />
          </Section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
