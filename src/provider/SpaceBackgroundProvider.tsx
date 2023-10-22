import { ReactNode } from "react";

interface SpaceBackgroundProviderProps {
  maxSize?: number;
}

/** 우주 배경 프로바이더 */
const SpaceBackgroundProvider = ({
  maxSize = 1920,
}: SpaceBackgroundProviderProps) => {
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
