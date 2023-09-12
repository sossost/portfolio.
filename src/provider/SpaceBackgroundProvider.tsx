"use client";

import { ReactNode, useEffect, useState } from "react";

/** 우주 배경 프로바이더 */
const SpaceBackgroundProvider = () => {
  const [maxSize, setMaxSize] = useState<number>(0);
  const [stars, setStars] = useState<any>([]);

  // 디바운싱을 위한 변수와 상태
  let debounceTimeout: NodeJS.Timeout | null = null;
  const debounceDelay = 500;

  // 윈도우 리사이즈 이벤트 핸들러
  const handleResize = () => {
    // 리렌더링 최적화를 위한 디바운스 처리
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(() => {
      // 윈도우 최대 사이즈와 별 개수 계산하는 로직
      const newMaxSize = Math.max(window.innerWidth, window.innerHeight);
      setMaxSize(newMaxSize);
      const _size = Math.floor(newMaxSize / 16);
      const newStars = new Array(_size).fill("");
      setStars(newStars);
    }, debounceDelay);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {[120, 240, 480, 960, 1920, 3840, 7680, 15360].map((time, i) => (
        <StarContainer time={time} key={i}>
          <Stars maxSize={maxSize} stars={stars} />
        </StarContainer>
      ))}
    </>
  );
};

export default SpaceBackgroundProvider;

interface StarContainerProps {
  children: ReactNode;
  time?: number;
}

export const StarContainer = ({
  children,
  time = 1024,
}: StarContainerProps) => {
  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
        animation: `moveStar ${time}s linear infinite`,
      }}
    >
      {children}
    </div>
  );
};

interface StarProps {
  maxSize: number;
  stars: string[];
}

export const Stars = ({ maxSize, stars }: StarProps) => {
  const getRandomX = () => Math.random() * maxSize;
  const getRandomY = () => Math.random() * maxSize;
  const randomRadius = () => Math.random() * 0.7 + 1;

  return (
    <>
      {stars.map((_: string, i: number) => {
        const size = randomRadius();
        const top = getRandomY();
        const left = getRandomX();

        return (
          <div
            key={i}
            style={{
              width: size,
              height: size,
              top: top,
              left: left,
              position: "absolute",
              zIndex: -1,
              background: "white",
              borderRadius: "50%",
            }}
          />
        );
      })}
    </>
  );
};
