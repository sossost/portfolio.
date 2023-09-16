import { useContext } from "react";
import { MobileMenuModalContext } from "@/provider/MobileMenuProvider";
import { HEADER_MENU } from "@/constants/menu";
import { twMerge } from "tailwind-merge";
import { useSetRecoilState } from "recoil";
import { pageState } from "@/store/pageAtom";

import Backdrop from "../Atoms/Backdrop";

const MobileMenuModal = () => {
  const { isModal, handleModalClose } = useContext(MobileMenuModalContext);

  const setPage = useSetRecoilState(pageState);

  const handleMenuClick = (item: string) => {
    setPage(item);
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
