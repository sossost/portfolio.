"use client";

import { useContext, useState } from "react";
import { ProjectModalContext } from "@/provider/ProjectModalProvider";
import { PROJECTS } from "@/data/project";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { LINK } from "@/constants/link";

import Title from "../Atoms/Title";
import FadeInWrapper from "../Atoms/FadeInWrapper";
import ProjectDetailModal from "../Organisms/ProjectDetailModal";
import ProjectItem from "../Organisms/ProjectItem";
import PageLayout from "../Atoms/PageLayout";
import Spacing from "../Atoms/Spacing";
import NextStep from "../Organisms/NextStep";

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
      <Title>Projects.</Title>

      <Spacing className="h-4" />

      <FadeInWrapper className="flex flex-col lg:flex-wrap w-full gap-x-6 gap-y-6 lg:h-[1700px]">
        {PROJECTS.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project.id)}
          />
        ))}
      </FadeInWrapper>

      <NextStep page={LINK.CONTACT} text="저에게 관심이 생기셨나요?" />

      <ProjectDetailModal project={selectedProject!} />
    </PageLayout>
  );
};

export default ProjectTemplate;
