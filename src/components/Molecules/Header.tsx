"use client";

import { useRouter } from "next/navigation";
import { HEADER_MENU } from "@/constants/menu";

import HoverControlWrapper from "../Atoms/HoverControlWrapper";
import Logo from "../Atoms/Logo";
import CrossEffect from "../Atoms/CrossEffect";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center h-28">
      <div className="flex justify-between items-center w-[1100px] text-neutral-100">
        <HoverControlWrapper>
          <Logo />
        </HoverControlWrapper>
        <ul className="flex gap-8 cursor-pointer">
          {HEADER_MENU.map((item) => (
            <li key={item.title} onClick={() => router.push(item.link)}>
              <HoverControlWrapper className="relative group">
                <h4 className="font-extralight hover:scale-90 transition-transform ease-in-out duration-300 transform-gpu origin-bottom">
                  {item.title}
                </h4>
                <CrossEffect />
              </HoverControlWrapper>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
