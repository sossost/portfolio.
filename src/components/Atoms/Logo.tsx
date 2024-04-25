import { LINK } from "@/constants/link";
import { useRouter } from "next/navigation";
import React from "react";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  link?: string;
}

const Logo = ({ link = "/", ...props }: LogoProps) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center" {...props}>
      <h1
        onClick={() => router.push("/")}
        className="font-light hover:cursor-pointer"
      >
        Ynnsuis
      </h1>
    </div>
  );
};

export default Logo;
