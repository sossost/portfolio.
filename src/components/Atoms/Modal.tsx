import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  children: React.ReactNode;
  isModal: boolean;
  className?: string;
}

const Modal = ({ children, isModal, className }: ModalProps) => {
  const modalContainerRef = useRef<HTMLDivElement | null>(null);

  const modalStyle = isModal
    ? "opacity-1 transform translate-y-[-50%]"
    : "opacity-0 transform translate-y-[200%]";

  useEffect(() => {
    if (isModal && modalContainerRef.current) {
      modalContainerRef.current.scrollTop = 0;
    }
  }, [isModal]);

  return (
    <div
      className={twMerge(
        `
          fixed
          top-1/2
          left-1/2
          transform
          translate-x-[-50%]
          translate-y-[-50%]
          flex
          px-5
          md:px-20
          bg-dark/100
          backdrop-blur-[100px]
          z-50
          h-[100vh]
          max-w-[910px]
          w-full
          overflow-hidden
          transition-all
          duration-500
          ease-in-out
        `,
        modalStyle,
        className
      )}
    >
      <div
        className="overflow-y-auto scrollbar-hide w-full"
        ref={modalContainerRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
