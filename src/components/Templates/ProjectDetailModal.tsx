"use client";

import { useEffect, useState } from "react";
import { useFetchMd } from "@/hooks/useFetchMd";
import { useProjectModalStore } from "@/store/projectModalState";

import Backdrop from "../Atoms/Backdrop";
import Modal from "../Atoms/Modal";
import ProjectDetail from "../Organisms/ProjectDetail";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";

const ProjectDetailModal = () => {
  const { clickedProject, isModal, handleModalClose } = useProjectModalStore();

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
