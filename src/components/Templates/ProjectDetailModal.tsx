"use client";

import { useContext, useEffect, useState } from "react";
import { ProjectModalContext } from "@/provider/ProjectModalProvider";
import { useFetchMd } from "@/hooks/useFetchMd";

import Backdrop from "../Atoms/Backdrop";
import Modal from "../Atoms/Modal";
import ProjectDetail from "../Organisms/ProjectDetail";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";

const ProjectDetailModal = () => {
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

  return (
    <>
      {isModal && (
        <HoverControlWrapper>
          <Backdrop onClick={handleModalClose} />
        </HoverControlWrapper>
      )}
      <Modal isModal={isModal}>
        <ProjectDetail
          handleModalClose={handleModalClose}
          project={clickedProject}
          mdContent={mdContent}
        />
      </Modal>
    </>
  );
};

export default ProjectDetailModal;
