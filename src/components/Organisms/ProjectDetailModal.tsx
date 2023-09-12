"use client";

import { Project } from "@/../types";
import { useContext } from "react";
import { ProjectModalContext } from "@/provider/ProjectModalProvider";

import Backdrop from "../Atoms/Backdrop";
import Modal from "../Atoms/Modal";
import ProjectDetail from "../Molecules/ProjectDetail";

interface ProjectDetailModalProps {
  project: Project;
}

const ProjectDetailModal = ({ project }: ProjectDetailModalProps) => {
  const { isModal, handleModalClose } = useContext(ProjectModalContext);

  return (
    <>
      {isModal && <Backdrop onClick={handleModalClose} />}
      <Modal>
        <ProjectDetail project={project} />
      </Modal>
    </>
  );
};

export default ProjectDetailModal;
