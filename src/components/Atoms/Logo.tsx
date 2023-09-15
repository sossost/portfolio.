import { LINK } from "@/constants/link";
import { pageState } from "@/store/pageAtom";
import React from "react";
import { useSetRecoilState } from "recoil";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  link?: string;
}

const Logo = ({ link = "/", ...props }: LogoProps) => {
  const setPage = useSetRecoilState(pageState);

  return (
    <div className="flex items-center justify-center" {...props}>
      <h1
        onClick={() => setPage(LINK.MAIN)}
        className="font-light hover:cursor-pointer"
      >
        Ynnsuis
      </h1>
    </div>
  );
};

export default Logo;
