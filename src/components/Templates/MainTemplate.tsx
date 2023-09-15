"use client";

import styles from "@/styles/main.module.css";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSetRecoilState } from "recoil";
import { pageState } from "@/store/pageAtom";
import { LINK } from "@/constants/link";

import HoverControlWrapper from "../Atoms/HoverControlWrapper";

const MainTemplate = () => {
  const setPage = useSetRecoilState(pageState);

  // 컴포넌트 마운트 여부
  const [isMounted, setIsMounted] = useState(false);

  // 텍스트 컴포넌트 등장 여부
  const [isVisible, setIsVisible] = useState(false);

  // 가운데 원 영역 클릭 여부
  const [clicked, setClicked] = useState(false);

  // 가운데 원 영역 클릭 이벤트
  const handleClickCircle = () => {
    setClicked(true);
    // 클릭 후 1초 뒤에 텍스트 컴포넌트 사라짐
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    // 클릭 후 2초 뒤에 about 페이지로 이동
    setTimeout(() => {
      setPage(LINK.ABOUT);
    }, 1800);
  };

  // 컴포넌트 마운트
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 텍스트 컴포넌트 등장 타이밍
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <HoverControlWrapper>
        <div className={styles.circle_wrapper} onClick={handleClickCircle}>
          <div
            className={`${styles.circle} ${isMounted && styles.top} ${
              clicked && styles.clicked
            }`}
          ></div>
          <div className="absolute left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%]">
            <h1
              className={twMerge(
                `font-light tracking-[9px] text-[16px] md:text-[36px] opacity-0
                 transition-opacity duration-1000 ease-in-out`,
                isVisible && "opacity-100"
              )}
            >
              JANG YOON SU
            </h1>
            <h1
              className={twMerge(
                `font-medium tracking-[10px] text-[24px] md:text-[49px] opacity-0 
                 transition-opacity duration-1000 ease-in-out`,
                isVisible && "opacity-100"
              )}
            >
              PORTFOLIO
            </h1>
          </div>
          <div
            className={`${styles.circle} ${isMounted && styles.bottom} ${
              clicked && styles.clicked
            }`}
          ></div>
        </div>
      </HoverControlWrapper>
    </div>
  );
};

export default MainTemplate;
