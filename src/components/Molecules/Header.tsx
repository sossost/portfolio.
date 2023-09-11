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
              <HoverControlWrapper>
                <h4 className="font-extralight group relative">
                  {item.title}
                  <CrossEffect />
                </h4>
              </HoverControlWrapper>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
