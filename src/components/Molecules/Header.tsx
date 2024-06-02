"use client";

import { HEADER_MENU } from "@/constants/menu";
import { MobileMenuModalContext } from "@/provider/MobileMenuProvider";
import { HiOutlineMenu } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import HoverControlWrapper from "../Atoms/HoverControlWrapper";
import Logo from "../Atoms/Logo";
import CrossEffect from "../Atoms/CrossEffect";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const { handleModalOpen } = useContext(MobileMenuModalContext);

  const headerBgColor = isScrolled
    ? "bg-dark/80 backdrop-blur-xl"
    : "bg-transparent";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={twMerge(
        `fixed w-screen flex justify-center h-20 px-5 z-50`,
        headerBgColor
      )}
    >
      <div className="flex justify-between items-center w-[1100px] text-neutral-100">
        <HoverControlWrapper>
          <Logo />
        </HoverControlWrapper>
        <div className="gap-8 cursor-pointer hidden md:flex">
          {HEADER_MENU.map((item) => (
            <div key={item} onClick={() => router.push(`?category=${item}`)}>
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
