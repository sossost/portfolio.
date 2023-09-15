import { useFetchMd } from "@/hooks/useFetchMd";
import { useContext, useEffect, useState } from "react";
import { ProjectModalContext } from "@/provider/ProjectModalProvider";
import { Project } from "@/types";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import CloseButton from "../Atoms/CloseButton";
import TagList from "./TagList";
import Section from "../Atoms/Section";
import Title from "../Atoms/Title";
import ImageFrame from "../Atoms/ImageFrame";
import IconicAnchor from "./IconicAnchor";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";
import MarkdownRenderer from "../Atoms/MarkdownRenderer";

interface ProjectDetailProps {
  clickedProject: Project;
}

const ProjectDetail = ({ clickedProject }: ProjectDetailProps) => {
  const [project, setProject] = useState<Project | null>(null);
  const fetchedMd = useFetchMd(project?.link || null);
  const [mdContent, setMdContent] = useState<string | null>(null);

  const { handleModalClose } = useContext(ProjectModalContext);

  const { isModal } = useContext(ProjectModalContext);

  useEffect(() => {
    if (!isModal) {
      setProject(null);
      setMdContent(null);
    } else {
      setProject(clickedProject);
      setMdContent(fetchedMd);
    }
  }, [isModal, clickedProject, fetchedMd]);

  if (!project) return null;

  return (
    <div className="py-10 flex flex-col gap-y-4">
      <div className="flex justify-end">
        <HoverControlWrapper>
          <CloseButton onClick={handleModalClose} />
        </HoverControlWrapper>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="flex gap-x-4 justify-between items-end">
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
            <div className="flex gap-4">
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
