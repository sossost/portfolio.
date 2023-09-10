"use client";

import { useState, useEffect } from "react";
import { mouseHoverAtom } from "@/store/mouseHoverAtom";
import { useRecoilValue } from "recoil";
import useCheckDesktop from "@/hooks/useCheckDesktop";

interface MouseEffectProvider {
  children: React.ReactNode;
}

const CIRCLE_RADIUS = 35;

const MouseEffectProvider = ({ children }: MouseEffectProvider) => {
  const isDesktop = useCheckDesktop();
  const isHover = useRecoilValue(mouseHoverAtom);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isDesktop) {
    return <>{children}</>;
  }

  const containerStyle: React.CSSProperties = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${
      mousePosition.y + scrollPosition
    }px,
    rgba(16, 40, 65, 0.5),
    rgba(7, 22, 36, 0.3) 40%,
    rgba(5, 13, 26, 0))`,
    minHeight: "100vh",
    padding: "0 20px",
  };

  const circleStyle: React.CSSProperties = {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    border: "1px solid white",
    borderRadius: "50%",
    position: "absolute",
    top: `${mousePosition.y - CIRCLE_RADIUS + scrollPosition}px`,
    left: `${mousePosition.x - CIRCLE_RADIUS}px`,
    transform: `scale(${isHover ? 0.2 : 1})`,
    transformOrigin: "center",
    background: `rgba(255, 255, 255, ${isHover ? "0.3" : "0"})`,
    pointerEvents: "none",
    zIndex: 1,
    transition: "transform 0.5s ease, background 0.5s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={circleStyle} />
      {children}
    </div>
  );
};

export default MouseEffectProvider;
