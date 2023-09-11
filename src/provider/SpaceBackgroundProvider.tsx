"use client";

import { ReactNode, useEffect, useState } from "react";

const SpaceBackgroundProvider = () => {
  const [maxSize, setMaxSize] = useState<number>(0);
  const [stars, setStars] = useState<any>([]);

  useEffect(() => {
    setMaxSize(Math.max(window.innerWidth, window.innerHeight));

    const _size = Math.floor(maxSize / 12);
    const newStars = new Array(_size).fill("");

    setStars(newStars);
  }, [maxSize]);

  return (
    <>
      {[64, 128, 256, 512, 1024].map((time, i) => (
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

const StarContainer = ({ children, time = 1024 }: StarContainerProps) => {
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

const Stars = ({ maxSize, stars }: StarProps) => {
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
