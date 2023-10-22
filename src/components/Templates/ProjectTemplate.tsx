"use client";

import { PROJECTS } from "@/data/project";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { LINK } from "@/constants/link";
import useCheckDesktop from "@/hooks/useCheckDesktop";

import Title from "../Atoms/Title";
import FadeInWrapper from "../Atoms/FadeInWrapper";
import ProjectItem from "../Organisms/ProjectItem";
import PageLayout from "../Atoms/PageLayout";
import Spacing from "../Atoms/Spacing";
import NextStep from "../Organisms/NextStep";

const ProjectTemplate = () => {
  useScrollToTop();
  const isDesktop = useCheckDesktop();

  const projectList = isDesktop
    ? PROJECTS
    : PROJECTS.sort((a, b) => a.index - b.index);

  return (
    <PageLayout>
      <Title>Projects.</Title>

      <Spacing className="h-4" />

      <FadeInWrapper className="md:columns-2 gap-x-6 lg:flex-wrap w-full">
        {projectList.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </FadeInWrapper>

      <NextStep page={LINK.CONTACT} text="저에게 관심이 생기셨나요?" />
    </PageLayout>
  );
};

export default ProjectTemplate;
