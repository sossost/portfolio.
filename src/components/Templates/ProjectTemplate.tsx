"use client";

import { useContext, useState } from "react";
import { PROJECTS } from "@/constants/project";
import { ProjectModalContext } from "@/provider/ProjectModalProvider";

import Title from "../Atoms/Title";
import FadeInWrapper from "../Atoms/FadeInWrapper";
import ProjectDetailModal from "../Organisms/ProjectDetailModal";
import ProjectItem from "../Organisms/ProjectItem";
import PageLayout from "../Atoms/PageLayout";
import Spacing from "../Atoms/Spacing";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import NextStep from "../Molecules/NextStep";

const ProjectTemplate = () => {
  useScrollToTop();

  const [openedProjectId, setOpenedProjectId] = useState<string>(
    PROJECTS[0].id
  );
  const { handleModalOpen } = useContext(ProjectModalContext);

  const selectedProject = PROJECTS.find(
    (project) => project.id === openedProjectId
  );

  const handleProjectClick = (projectId: string) => {
    setOpenedProjectId(projectId);
    handleModalOpen();
  };

  return (
    <PageLayout>
      <ProjectDetailModal project={selectedProject!} />

      <Title>Projects.</Title>

      <Spacing className="h-4" />

      <FadeInWrapper className="flex flex-col lg:flex-wrap w-full gap-x-6 gap-y-8 lg:h-[2000px]">
        {PROJECTS.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project.id)}
          />
        ))}
      </FadeInWrapper>

      <NextStep href="/contact" text="저에게 관심이 생기셨나요?" />
    </PageLayout>
  );
};

export default ProjectTemplate;
