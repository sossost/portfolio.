"use client";

import ProjectDetailModal from "@/components/Templates/ProjectDetailModal";
import { ReactNode } from "react";

const ProjectModalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProjectDetailModal />
    </>
  );
};

export default ProjectModalProvider;
