"use client";

import { HEADER_MENU } from "@/constants/menu";

import HoverControlWrapper from "../Atoms/HoverControlWrapper";
import Logo from "../Atoms/Logo";
import CrossEffect from "../Atoms/CrossEffect";
import { useSetRecoilState } from "recoil";
import { pageState } from "@/store/pageAtom";

const Header = () => {
  const setPage = useSetRecoilState(pageState);

  return (
    <div className="flex justify-center h-28">
      <div className="flex justify-between items-center w-[1100px] text-neutral-100">
        <HoverControlWrapper>
          <Logo />
        </HoverControlWrapper>
        <div className="flex gap-8 cursor-pointer">
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
      </div>
    </div>
  );
};

export default Header;
