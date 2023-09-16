"use client";

import { ReactNode, createContext, useState } from "react";

import MobileMenuModal from "@/components/Molecules/MobileMenuModal";

interface MobileMenuModalContextContextType {
  isModal: boolean;
  handleModalOpen: () => void;
  handleModalClose: () => void;
}

export const MobileMenuModalContext =
  createContext<MobileMenuModalContextContextType>({
    isModal: false,
    handleModalOpen: () => {},
    handleModalClose: () => {},
  });

const MobileMenuModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModal, setIsModal] = useState(false);

  console.log(isModal);

  const handleModalOpen = () => {
    setIsModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <MobileMenuModalContext.Provider
      value={{ isModal, handleModalOpen, handleModalClose }}
    >
      {children}
      <MobileMenuModal />
    </MobileMenuModalContext.Provider>
  );
};

export default MobileMenuModalProvider;
