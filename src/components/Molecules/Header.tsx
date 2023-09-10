"use client";

import { useRouter } from "next/navigation";
import { HEADER_MENU } from "@/constants/menu";

import HoverControlWrapper from "../Atoms/HoverControlWrapper";
import Logo from "../Atoms/Logo";

/**
 * @description 헤더 컴포넌트
 * @author 장윤수
 * @date 2023-09-11
 * @version 1.0
 */

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
                <h4 className="font-extralight hover:opacity-50 transition-opacity">
                  {item.title}
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
