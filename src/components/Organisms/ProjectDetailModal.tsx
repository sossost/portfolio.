"use client";

import { useContext } from "react";
import { ProjectModalContext } from "@/provider/ProjectModalProvider";
import { Project } from "@/types";

import Backdrop from "../Atoms/Backdrop";
import Modal from "../Atoms/Modal";
import ProjectDetail from "../Molecules/ProjectDetail";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";

interface ProjectDetailModalProps {
  project: Project;
}

const ProjectDetailModal = ({ project }: ProjectDetailModalProps) => {
  const { isModal, handleModalClose } = useContext(ProjectModalContext);

  return (
    <>
      {isModal && (
        <HoverControlWrapper>
          <Backdrop onClick={handleModalClose} />
        </HoverControlWrapper>
      )}
      <Modal>
        <ProjectDetail clickedProject={project} />
      </Modal>
    </>
  );
};

export default ProjectDetailModal;
