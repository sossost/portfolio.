import { useFetchMd } from "@/hooks/useFetchMd";
import { useContext, useEffect, useState } from "react";
import { ProjectModalContext } from "@/provider/ProjectModalProvider";
import { Project } from "@/types";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { DEFAULT_IMAGE } from "@/data/project";

import CloseButton from "../Atoms/CloseButton";
import TagList from "./TagList";
import Section from "../Atoms/Section";
import Title from "../Atoms/Title";
import ImageFrame from "../Atoms/ImageFrame";
import IconicAnchor from "./IconicAnchor";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";
import MarkdownRenderer from "../Atoms/MarkdownRenderer";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const mdContent = useFetchMd(project?.link || null);
  const { isModal } = useContext(ProjectModalContext);

  const { handleModalClose } = useContext(ProjectModalContext);

  const [image, setImage] = useState<string>(DEFAULT_IMAGE);

  useEffect(() => {
    if (!isModal) {
      setImage(
        "https://tripsketchbucket.s3.ap-northeast-2.amazonaws.com/portfolio/default.png"
      );
    }
  }, [isModal]);

  useEffect(() => {
    if (project?.image) {
      setImage(project.image);
    }
    if (project?.thumbnail) {
      setImage(project.thumbnail);
    }
  }, [project]);

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
          imageUrl={image}
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
