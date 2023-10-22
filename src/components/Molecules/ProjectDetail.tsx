import { useFetchMd } from "@/hooks/useFetchMd";
import { useContext, useEffect, useState } from "react";
import { ProjectModalContext } from "@/provider/ProjectModalProvider";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import CloseButton from "../Atoms/CloseButton";
import TagList from "./TagList";
import Section from "../Atoms/Section";
import Title from "../Atoms/Title";
import ImageFrame from "../Atoms/ImageFrame";
import IconicAnchor from "./IconicAnchor";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";
import MarkdownRenderer from "../Atoms/MarkdownRenderer";

const ProjectDetail = () => {
  const { clickedProject, isModal, handleModalClose } =
    useContext(ProjectModalContext);

  const fetchedMd = useFetchMd(clickedProject?.link || null);
  const [mdContent, setMdContent] = useState<string | null>(null);

  useEffect(() => {
    if (!isModal) {
      setMdContent(null);
    } else {
      setMdContent(fetchedMd);
    }
  }, [isModal, fetchedMd]);

  if (!clickedProject) return null;

  return (
    <div className="py-10 flex flex-col gap-y-4">
      <div className="fixed right-5 top-10 z-10 bg-dark/80 rounded-full backdrop-blur-lg md:static md:flex md:justify-end md:right-0">
        <HoverControlWrapper>
          <CloseButton onClick={handleModalClose} />
        </HoverControlWrapper>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col md:flex-row gap-x-4 justify-between md:items-end ">
          <Title>{clickedProject.name}.</Title>
          <h4>{clickedProject.period}</h4>
        </div>

        <ImageFrame
          imageUrl={clickedProject.image || clickedProject.thumbnail}
          imageAlt={clickedProject.name}
          aspectRatio={0.6}
        />

        <Section title="About.">{clickedProject.description}</Section>

        <Section title="Technologies.">
          <TagList tags={clickedProject.tags} />
        </Section>

        <Section title="Links.">
          {clickedProject.website && (
            <div className="flex gap-4">
              <IconicAnchor href={clickedProject.website} icon={AiOutlineLink}>
                {clickedProject.website}
              </IconicAnchor>
              {clickedProject.testId && (
                <p>테스트 계정 : {clickedProject.testId}</p>
              )}
            </div>
          )}

          <IconicAnchor href={clickedProject.github} icon={AiFillGithub}>
            {clickedProject.github}
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
