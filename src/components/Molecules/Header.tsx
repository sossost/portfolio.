"use client";

import { HEADER_MENU } from "@/constants/menu";
import { useSetRecoilState } from "recoil";
import { pageState } from "@/store/pageAtom";
import { MobileMenuModalContext } from "@/provider/MobileMenuProvider";
import { HiOutlineMenu } from "react-icons/hi";
import { useContext } from "react";

import HoverControlWrapper from "../Atoms/HoverControlWrapper";
import Logo from "../Atoms/Logo";
import CrossEffect from "../Atoms/CrossEffect";

const Header = () => {
  const { handleModalOpen } = useContext(MobileMenuModalContext);
  const setPage = useSetRecoilState(pageState);

  return (
    <div className="flex justify-center h-28">
      <div className="flex justify-between items-center w-[1100px] text-neutral-100">
        <HoverControlWrapper>
          <Logo />
        </HoverControlWrapper>
        <div className="gap-8 cursor-pointer hidden md:flex">
          {HEADER_MENU.map((item) => (
            <div key={item} onClick={() => setPage(item)}>
              <HoverControlWrapper className="relative group">
                <h4 className="font-extralight hover:scale-90 transition-transform ease-in-out duration-300 transform-gpu origin-bottom">
                  {item}
                </h4>
                <CrossEffect />
              </HoverControlWrapper>
            </div>
          ))}
        </div>
        <HiOutlineMenu
          className="text-[40px] md:hidden"
          onClick={handleModalOpen}
        />
      </div>
    </div>
  );
};

export default Header;
