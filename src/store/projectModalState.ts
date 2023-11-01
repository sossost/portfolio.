import { Project } from "@/types";
import { create } from "zustand";

interface ProjectModalState {
  isModal: boolean;
  clickedProject: Project | null;
  handleModalClose: () => void;
  handleProjectClick: (project: Project) => void;
}

export const useProjectModalStore = create<ProjectModalState>((set) => ({
  isModal: false,
  clickedProject: null,
  handleModalClose: () => {
    set({ isModal: false, clickedProject: null });
    document.body.style.overflow = "auto";
  },
  handleProjectClick: (project: Project) => {
    set({ clickedProject: project, isModal: true });
    document.body.style.overflow = "hidden";
  },
}));
