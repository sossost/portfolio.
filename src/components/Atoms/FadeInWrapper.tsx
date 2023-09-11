"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface FadeInWrapperProps {
  children: React.ReactNode;
  className?: string;
  time?: number;
}

/** 이 래퍼 컴포넌트를 감싸면 컴포넌트 로딩 후, 일정 시간 뒤에 fade-in 효과를 보여줍니다. */
const FadeInWrapper = ({
  children,
  className,
  time = 0,
}: FadeInWrapperProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, time);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={twMerge(
        `
        transform 
        transition-all 
        duration-500 
        ease-in-out 
        ${loaded ? "translate-y-0" : "translate-y-8"}
        ${loaded ? "opacity-100" : "opacity-0"}
      `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
