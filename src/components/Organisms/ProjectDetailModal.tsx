"use client";

import { useContext } from "react";
import { ProjectModalContext } from "@/provider/ProjectModalProvider";

import Backdrop from "../Atoms/Backdrop";
import Modal from "../Atoms/Modal";
import ProjectDetail from "../Molecules/ProjectDetail";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";

const ProjectDetailModal = () => {
  const { isModal, handleModalClose } = useContext(ProjectModalContext);

  return (
    <>
      {isModal && (
        <HoverControlWrapper>
          <Backdrop onClick={handleModalClose} />
        </HoverControlWrapper>
      )}
      <Modal isModal={isModal}>
        <ProjectDetail />
      </Modal>
    </>
  );
};

export default ProjectDetailModal;
