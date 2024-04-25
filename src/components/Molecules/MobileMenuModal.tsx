import { useContext } from "react";
import { MobileMenuModalContext } from "@/provider/MobileMenuProvider";
import { HEADER_MENU } from "@/constants/menu";
import { twMerge } from "tailwind-merge";

import Backdrop from "../Atoms/Backdrop";
import { useRouter } from "next/navigation";

const MobileMenuModal = () => {
  const router = useRouter();
  const { isModal, handleModalClose } = useContext(MobileMenuModalContext);

  const handleMenuClick = (item: string) => {
    router.push(`?page=${item}`);
    handleModalClose();
  };

  return (
    <>
      {isModal && <Backdrop onClick={handleModalClose} />}
      <div
        className={twMerge(
          `
          fixed inset-y-0 right-0 w-fit shadow-xl transform translate-x-[100%] 
          transition-transform duration-300 ease-in-out z-50 bg-dark
          `,
          isModal ? "translate-x-0" : ""
        )}
      >
        <div className="w-60 pt-4 px-12">
          {HEADER_MENU.map((item) => (
            <div
              key={item}
              className="
              w-full 
              h-16 
              flex 
              items-center
              text-white
              text-2xl
              "
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenuModal;
