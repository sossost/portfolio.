"use client";

import { ReactNode, useEffect, useState } from "react";

/** 우주 배경 프로바이더 */
const SpaceBackgroundProvider = () => {
  const [maxSize, setMaxSize] = useState<number>(1920);

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
    }, debounceDelay);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {[50, 75, 100, 250, 500, 1000].map((time, i) => {
        const stars = new Array(Math.floor(maxSize / 10)).fill("");

        return (
          <StarContainer time={time} key={i} index={i}>
            <Stars maxSize={maxSize} stars={stars} index={i} />
          </StarContainer>
        );
      })}
    </>
  );
};

export default SpaceBackgroundProvider;

interface StarContainerProps {
  children: ReactNode;
  time?: number;
  index: number;
}

export const StarContainer = ({
  children,
  time = 1000,
  index,
}: StarContainerProps) => {
  const animation =
    time < 1000
      ? `moveStar${Math.floor(index / 2)} ${time}s linear infinite`
      : "none";

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
        animation: animation,
      }}
    >
      {children}
    </div>
  );
};

interface StarProps {
  maxSize: number;
  stars: string[];
  index: number;
}

export const Stars = ({ maxSize, stars, index }: StarProps) => {
  const getRandomX = () => Math.random() * maxSize;
  const getRandomY = () => Math.random() * maxSize;
  const randomRadius = () => Math.random() * 0.5 + (index + 10) / 15;

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
