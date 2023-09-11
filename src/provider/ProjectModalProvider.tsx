"use client";

import { ReactNode, createContext, useState } from "react";

interface ProjectModalContextType {
  isModal: boolean;
  handleModalOpen: () => void;
  handleModalClose: () => void;
}

export const ProjectModalContext = createContext<ProjectModalContextType>({
  isModal: false,
  handleModalOpen: () => {},
  handleModalClose: () => {},
});

const ProjectModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModal, setIsModal] = useState(false);

  const handleModalOpen = () => {
    setIsModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <ProjectModalContext.Provider
      value={{ isModal, handleModalOpen, handleModalClose }}
    >
      {children}
    </ProjectModalContext.Provider>
  );
};

export default ProjectModalProvider;
