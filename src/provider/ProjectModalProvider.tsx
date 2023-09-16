"use client";

import ProjectDetailModal from "@/components/Organisms/ProjectDetailModal";
import { Project } from "@/types";
import { ReactNode, createContext, useState } from "react";

interface ProjectModalContextType {
  isModal: boolean;
  clickedProject: Project | null;
  handleModalClose: () => void;
  handleProjectClick: (project: Project) => void;
}

export const ProjectModalContext = createContext<ProjectModalContextType>({
  isModal: false,
  clickedProject: null,
  handleModalClose: () => {},
  handleProjectClick: () => {},
});

const ProjectModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModal, setIsModal] = useState(false);
  const [clickedProject, setClickedProject] = useState<Project | null>(null);

  const handleModalClose = () => {
    setIsModal(false);
    setClickedProject(null);
    document.body.style.overflow = "auto";
  };

  const handleProjectClick = (project: Project) => {
    setClickedProject(project);
    setIsModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <ProjectModalContext.Provider
      value={{ isModal, clickedProject, handleProjectClick, handleModalClose }}
    >
      {children}
      <ProjectDetailModal />
    </ProjectModalContext.Provider>
  );
};

export default ProjectModalProvider;
