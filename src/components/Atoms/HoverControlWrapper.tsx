import React from "react";
import { mouseHoverAtom } from "@/store/mouseHoverAtom";
import { useSetRecoilState } from "recoil";

interface HoverControlWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const HoverControlWrapper = ({
  children,
  ...props
}: HoverControlWrapperProps) => {
  const setIsHover = useSetRecoilState(mouseHoverAtom);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      {children}
    </div>
  );
};

export default HoverControlWrapper;
